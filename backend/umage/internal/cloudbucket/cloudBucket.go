package cloudbucket

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"time"

	"cloud.google.com/go/storage"
	"github.com/gin-gonic/gin"
	"google.golang.org/api/option"
	"google.golang.org/appengine"
)

var (
	storageClient *storage.Client

	//key read
	key_type                    string = os.Getenv("KEY_TYPE")
	project_id                  string = os.Getenv("PROJECT_ID")
	private_key_id              string = os.Getenv("PRIVATE_KEY_ID")
	private_key                 string = os.Getenv("PRIVATE_KEY")
	client_email                string = os.Getenv("CLIENT_EMAIL")
	client_id                   string = os.Getenv("CLIENT_ID")
	auth_uri                    string = os.Getenv("AUTH_URI")
	token_uri                   string = os.Getenv("TOKEN_URI")
	auth_provider_x509_cert_url string = os.Getenv("AUTH_PROVIDER_X509_CERT_URL")
	client_x509_cert_url        string = os.Getenv("CLIENT_X509_CERT_URL")
)

type Keys struct {
	Type                    string `json:"type"`
	ProjectID               string `json:"project_id"`
	PrivateKeyID            string `json:"private_key_id"`
	PrivateKey              string `json:"private_key"`
	ClientEmail             string `json:"client_email"`
	ClientID                string `json:"client_id"`
	AuthURI                 string `json:"auth_uri"`
	TokenURI                string `json:"token_uri"`
	AuthProviderX509CertURL string `json:"auth_provider_x509_cert_url"`
	ClientX509CertURL       string `json:"client_x509_cert_url"`
}

// HandleFileUploadToBucket uploads file to bucket
func HandleFileUploadToBucket(c *gin.Context) {
	bucket := "runtracking"

	userId := c.Request.Header.Get("X-User-Id")
	currentTimestamp := strconv.Itoa(int(time.Now().Unix()))

	var err error

	ctx := appengine.NewContext(c.Request)

	keys := Keys{
		Type:                    key_type,
		ProjectID:               project_id,
		PrivateKeyID:            private_key_id,
		PrivateKey:              private_key,
		ClientEmail:             client_email,
		ClientID:                client_id,
		AuthURI:                 auth_uri,
		TokenURI:                token_uri,
		AuthProviderX509CertURL: auth_provider_x509_cert_url,
		ClientX509CertURL:       client_x509_cert_url,
	}

	log.Println(keys)

	cred, err := json.Marshal(keys)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Internal",
			"error":   true,
		})
		log.Printf("Failed while marshaling keys: %v", err)
	}

	storageClient, err = storage.NewClient(ctx, option.WithCredentialsJSON(cred))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
			"error":   true,
		})
		log.Printf("Failed to create storage client: %v", err)
		return
	}

	f, uploadedFile, err := c.Request.FormFile("file")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
			"error":   true,
		})
		log.Printf("Failed to get form file: %v", err)
		return
	}

	defer f.Close()

	sw := storageClient.Bucket(bucket).Object(uploadedFile.Filename + "-xuid-" + userId + "-" + currentTimestamp).NewWriter(ctx)

	if _, err := io.Copy(sw, f); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
			"error":   true,
		})
		log.Printf("Failed to create new writter for bucket: %v", err)
		return
	}

	if err := sw.Close(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
			"error":   true,
		})
		log.Printf("Failed to close: %v", err)
		return
	}

	u, err := url.Parse("/" + bucket + "/" + sw.Attrs().Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
			"Error":   true,
		})
		log.Printf("Failed parse url: %v", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message":  "file uploaded successfully",
		"pathname": u.EscapedPath(),
	})
}
