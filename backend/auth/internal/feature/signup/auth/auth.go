package auth

import (
	"context"
	"fmt"
	"math/rand"
	"strings"
	"time"

	"github.com/manhrev/runtracking/backend/auth/internal/service/token"
	pb "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
)

type Auth interface {
	SignUp(ctx context.Context, request *pb.SignUpRequest) (*pb.SignUpReply, *token.Tokens, error)
}

type auth struct {
	ent   *ent.Client
	token token.Token
}

func New(
	ent *ent.Client,
	token token.Token) (Auth, error) {

	return &auth{
		ent:   ent,
		token: token,
	}, nil
}

func (s auth) SignUp(ctx context.Context, request *pb.SignUpRequest) (*pb.SignUpReply, *token.Tokens, error) {

	username := strings.TrimSpace(strings.ToLower(request.GetUserName()))
	pwd := strings.TrimSpace(strings.ToLower(request.GetPassword()))
	// fmt.Printf("Tokens: %s", tokens.AccessToken.Raw)

	var (
		tokens  *token.Tokens
		newUser *ent.User
		err     error
	)

	rand.Seed(time.Now().UnixNano())

	newUser, err = s.ent.User.Create().
		SetUsername(username).
		SetPassword(pwd).
		SetID(rand.Int63()).
		SetAge(32).
		SetDisplayName("dasd").
		SetEmail(" ").
		SetPhone("09").
		SetRole(1).
		SetHeight(12).
		SetWeight(12).
		SetProfilePicture("Dadsadas").
		Save(ctx)

	if err != nil {
		fmt.Println("Can not Sign up for user")
	}

	tokens, err = s.token.Create(newUser.ID)
	if err != nil {
		fmt.Println("Can not create access token when sign up")
	}

	return &pb.SignUpReply{
		TokenInfo: &pb.TokenInfo{
			UserId:      newUser.ID,
			UserName:    newUser.Username,
			IdToken:     tokens.AccessToken.Id,
			AccessToken: tokens.AccessToken.Raw,
		},
	}, tokens, nil
}
