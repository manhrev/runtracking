package server

import (
	"context"
	"fmt"
	"log"
	"net"

	authv3 "github.com/envoyproxy/go-control-plane/envoy/service/auth/v3"
	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/auth/internal/server/auth"
	authz "github.com/manhrev/runtracking/backend/auth/internal/server/authz"
	pb "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
	"google.golang.org/grpc"
)

const (
	db_user_name string = "root"
	db_password  string = "password@1"
	db_domain    string = "auth_db"
	db_port      string = "3306"
	db_name      string = "auth"
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

	// register main and other server servers
	authv3.RegisterAuthorizationServer(server, authz.NewServer())
	pb.RegisterAuthServer(server, auth.NewServer(entClient))

	lis, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
