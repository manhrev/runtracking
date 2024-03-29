package server

import (
	"context"
	"crypto/tls"
	"fmt"
	"log"
	"net"
	"os"

	_ "github.com/go-sql-driver/mysql"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/internal/server/plan"
	"github.com/manhrev/runtracking/backend/plan/internal/server/plani"
	pb "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
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

	listen_port string = os.Getenv("LISTEN_PORT")

	//notificationi service
	notificationi_domain string = os.Getenv("NOTIFICATIONI_DOMAIN")
	notificationi_port   string = os.Getenv("NOTIFICATIONI_PORT")
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

	notificationIConn, err := grpc.Dial(fmt.Sprintf("%s:%s", notificationi_domain, notificationi_port), grpc.WithTransportCredentials(creds))
	if err != nil {
		log.Fatalf("error while create connect to notification service: %v", err)
	}

	notificationiClient := notification.NewNotificationIClient(notificationIConn)

	// register main and other server servers
	pb.RegisterPlanServer(server, plan.NewServer(entClient))
	pb.RegisterPlanIServer(server, plani.NewServer(entClient, notificationiClient))

	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%s", listen_port))
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
