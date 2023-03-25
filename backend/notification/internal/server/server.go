package server

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/notification/internal/server/notification"
	"github.com/manhrev/runtracking/backend/notification/internal/server/notificationi"
	pb "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
	"google.golang.org/grpc"
)

var (
	db_user_name string = os.Getenv("DB_USERNAME")
	db_password  string = os.Getenv("DB_PASSWORD")
	db_domain    string = os.Getenv("DB_HOST")
	db_port      string = os.Getenv("DB_PORT")
	db_name      string = os.Getenv("DB_NAME")

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

	if err != nil {
		log.Fatalf("error while create connect to auth service: %v", err)
	}

	// register main and other server servers
	pb.RegisterNotificationServer(server, notification.NewServer(entClient))
	pb.RegisterNotificationIServer(server, notificationi.NewServer(entClient))
	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%s", listen_port))
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}

	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}

}
