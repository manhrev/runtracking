package server

import (
	"crypto/tls"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"

	_ "github.com/go-sql-driver/mysql"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/intermediary/internal/server/intermediaryi"
	"github.com/manhrev/runtracking/backend/intermediary/internal/service/expopush"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	db_user_name string = os.Getenv("DB_USERNAME")
	db_password  string = os.Getenv("DB_PASSWORD")
	db_domain    string = os.Getenv("DB_HOST")
	db_port      string = os.Getenv("DB_PORT")
	db_name      string = os.Getenv("DB_NAME")

	auth_service string = os.Getenv("AUTH_SERVICE")
	auth_port    string = os.Getenv("AUTH_PORT")

	listen_http_port     string = os.Getenv("LISTEN_HTTP_PORT")
	is_secure_connection        = os.Getenv("IS_SECURE_CONNECTION")
)

func Run() {
	server := newServer()
	Serve(server)
}

func newServer() *grpc.Server {
	server := grpc.NewServer()
	return server
}

func Serve(server *grpc.Server) {
	// init other services client connections, database driver and pass to server
	entNotificationClient, err := ent.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=True", db_user_name, db_password, db_domain, db_port, db_name))
	if err != nil {
		log.Fatalf("cannot create database connection: %v", err)
	}
	defer func() {
		if err := entNotificationClient.Close(); err != nil {
			panic(err)
		}
	}()

	expoPushService := expopush.NewExpoPushService(entNotificationClient)

	// connection credentials
	creds := insecure.NewCredentials()
	if is_secure_connection == "true" {
		creds = credentials.NewTLS(&tls.Config{InsecureSkipVerify: false})
	}

	conn, err := grpc.Dial(fmt.Sprintf("%s:%s", auth_service, auth_port), grpc.WithTransportCredentials(creds))
	if err != nil {
		log.Fatalf("error while create connect to auth service: %v", err)
	}
	authClient := auth.NewAuthIClient(conn)

	// http.HandleFunc("/notification/pushnoti2allusers", notification.PushNoti2AllUsers)
	r := mux.NewRouter()
	intermediaryi.RegisterRouteHttpServer(entNotificationClient, r, authClient, expoPushService)

	err = http.ListenAndServe(fmt.Sprintf(":%s", listen_http_port), r)
	if err != nil {
		log.Fatalf("Failed to serve http server: %v", err)
	}

}
