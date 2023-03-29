package main

import (
	"fmt"

	"github.com/manhrev/runtracking/backend/umage/internal/cloudbucket"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Hello World")

	r := gin.Default()
	r.GET("umage/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.POST("umage/upload-image", cloudbucket.HandleFileUploadToBucket)

	r.Run("0.0.0.0:8080")
}
