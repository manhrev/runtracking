package server

import (
	"context"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/group/internal/server/group"
	pb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"google.golang.org/grpc"
)

const (
	db_user_name string = "root"
	db_password  string = "password@1"
	db_domain    string = "group_db"
	db_port      string = "3306"
	db_name      string = "group"
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

	http.HandleFunc("/group", getRoot)
	go func() {
		err = http.ListenAndServe(":8000", nil)
		if err != nil {
			log.Fatalf("Failed to serve http server: %v", err)
		}
	}()

	// register main and other server servers
	pb.RegisterGroupServer(server, group.NewServer(entClient))

	lis, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}

	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}

}

func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / request\n")
	io.WriteString(w, "This is my website for group test!\n")
}
