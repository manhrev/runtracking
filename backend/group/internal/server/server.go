package server

import (
	"context"
	"crypto/tls"
	"fmt"
	"log"
	"net"
	"os"

	_ "github.com/go-sql-driver/mysql"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/server/group"
	pb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
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

	notification_service string = os.Getenv("NOTIFICATION_SERVICE")
	notification_port    string = os.Getenv("NOTIFICATION_PORT")

	auth_service string = os.Getenv("AUTH_SERVICE")
	auth_port    string = os.Getenv("AUTH_PORT")

	listen_port          string = os.Getenv("LISTEN_PORT")
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
	entClient, err := ent.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=True", db_user_name, db_password, db_domain, db_port, db_name))
	if err != nil {
		log.Fatalf("cannot create database connection: %v", err)
	}
	defer func() {
		if err := entClient.Close(); err != nil {
			panic(err)
		}
	}()
	if err := entClient.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

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

	notiConn, err := grpc.Dial(fmt.Sprintf("%s:%s", notification_service, notification_port), grpc.WithTransportCredentials(creds))
	// log.Printf("Conn : %v", conn)
	if err != nil {
		log.Fatalf("error while create connect to notification service: %v", err)
	}
	notificationClient := notification.NewNotificationIClient(notiConn)
	// register main and other server servers
	pb.RegisterGroupServer(server, group.NewServer(entClient, authClient, notificationClient))

	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%s", listen_port))
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}

	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}

}
