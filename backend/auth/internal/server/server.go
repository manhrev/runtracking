package server

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"

	authv3 "github.com/envoyproxy/go-control-plane/envoy/service/auth/v3"
	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/auth/internal/cache"
	"github.com/manhrev/runtracking/backend/auth/internal/feature/signin"
	"github.com/manhrev/runtracking/backend/auth/internal/feature/signup"
	"github.com/manhrev/runtracking/backend/auth/internal/server/auth"
	"github.com/manhrev/runtracking/backend/auth/internal/server/authi"
	authz "github.com/manhrev/runtracking/backend/auth/internal/server/authz"
	"github.com/manhrev/runtracking/backend/auth/internal/service/token"
	pb "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"go.uber.org/zap"
	"google.golang.org/grpc"
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

	listen_port string = os.Getenv("LISTEN_PORT")
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

	conn, err := grpc.Dial(fmt.Sprintf("%s:%s", notification_service, notification_port), grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("error while create connect to sample service: %v", err)
	}
	notificationClient := notification.NewNotificationIClient(conn)

	tokenService, err := token.New()
	if err != nil {
		log.Fatalf("cannot create token service: %v", err)
	}

	extractorService := extractor.New()

	featureSignIn, err := signin.New(entClient, tokenService)
	if err != nil {
		log.Fatalf("cannot create featureSignIn: %v", err)
	}

	featureSignUp, err := signup.New(entClient, tokenService)
	if err != nil {
		log.Fatalf("cannot create featureSignUp: %v", err)
	}

	cacheService, err := cache.New(entClient)

	if err != nil {
		log.Fatalf("cannot create cacheService: %v", err)
	}

	logger, _ := zap.NewProduction()

	// register main and other server servers
	authv3.RegisterAuthorizationServer(server, authz.NewServer(tokenService, cacheService))

	if err != nil {
		logger.Fatal("can not create cache", zap.Error(err))
	}

	// Register Auth Server
	pb.RegisterAuthServer(server, auth.NewServer(entClient, tokenService, featureSignIn, featureSignUp, cacheService, extractorService, notificationClient))
	// Register AuthIServer
	pb.RegisterAuthIServer(server, authi.NewServer(entClient))

	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%s", listen_port))
	if err != nil {
		log.Fatalf("error while create listen: %v", err)
	}
	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
