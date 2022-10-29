generate-proto:
	protoc --go_out=./pkg --go_opt=paths=source_relative --go-grpc_out=./pkg --go-grpc_opt=paths=source_relative ./api/sample.proto
generate-code:
	mkdir ./pkg/code
	protoc --go_out=./pkg/code --go-grpc_out=./pkg/code  ./api/sample_code.proto

generate:
	make generate-proto generate-code
run:
	go run ./cmd/.