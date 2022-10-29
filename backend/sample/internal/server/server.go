package server

import (
	"log"
	"net"

	"github.com/manhrev/runtracking/sample/internal/server/sample"
	pb "github.com/manhrev/runtracking/sample/pkg/api"
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
	pb.RegisterSampleServer(server, sample.NewServer())

	lis, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
