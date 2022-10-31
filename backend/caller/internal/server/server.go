package server

import (
	"fmt"
	"log"
	"net"

	"github.com/manhrev/runtracking/backend/caller/internal/server/caller"
	pb "github.com/manhrev/runtracking/backend/caller/pkg/api"
	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const (
	sample_service      string = "sample"
	sample_service_port string = "8080"
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
	conn, err := grpc.Dial(fmt.Sprintf("%s:%s", sample_service, sample_service_port), grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("error while create connect to sample service: %v", err)
	}
	sampleClient := sample.NewSampleClient(conn)

	// register main and other server servers
	pb.RegisterCallerServer(server, caller.NewServer(sampleClient))

	lis, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
