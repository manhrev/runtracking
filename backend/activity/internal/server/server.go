package server

import (
	"context"
	"crypto/tls"
	"fmt"
	"log"
	"net"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/activity/internal/server/activity"
	pb "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"

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
	listen_port  string = os.Getenv("LISTEN_PORT")

	//plani service
	plani_domain         string = os.Getenv("PLANI_DOMAIN")
	plani_port           string = os.Getenv("PLANI_PORT")
	groupi_domain        string = os.Getenv("GROUPI_DOMAIN")
	groupi_port          string = os.Getenv("GROUPI_PORT")
	eventi_domain        string = os.Getenv("EVENTI_DOMAIN")
	eventi_port          string = os.Getenv("EVENTI_PORT")
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

	planIConn, err := grpc.Dial(fmt.Sprintf("%s:%s", plani_domain, plani_port), grpc.WithTransportCredentials(creds))
	if err != nil {
		log.Fatalf("error while create connect to plani service: %v", err)
	}
	planiClient := plan.NewPlanIClient(planIConn)

	groupIConn, err := grpc.Dial(fmt.Sprintf("%s:%s", groupi_domain, groupi_port), grpc.WithTransportCredentials(creds))
	if err != nil {
		log.Fatalf("error while create connect to plani service: %v", err)
	}
	groupIClient := group.NewGroupIClient(groupIConn)

	eventIConn, err := grpc.Dial(fmt.Sprintf("%s:%s", eventi_domain, eventi_port), grpc.WithTransportCredentials(creds))
	if err != nil {
		log.Fatalf("error while create connect to plani service: %v", err)
	}
	eventIClient := event.NewEventIClient(eventIConn)

	// register main and other server servers
	pb.RegisterActivityServer(server, activity.NewServer(entClient, planiClient, groupIClient, eventIClient))

	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%s", listen_port))
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
