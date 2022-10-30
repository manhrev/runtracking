package server

import (
	"log"
	"net"

	authv3 "github.com/envoyproxy/go-control-plane/envoy/service/auth/v3"
	authz "github.com/manhrev/runtracking/backend/auth/internal/server/authz"
	"google.golang.org/grpc"
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

	// register main and other server servers
	authv3.RegisterAuthorizationServer(server, authz.NewServer())

	lis, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
