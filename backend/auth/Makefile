generate-proto:
	mkdir -p ./pkg/api
	protoc --go_out=./pkg --go_opt=paths=source_relative --go-grpc_out=./pkg --go-grpc_opt=paths=source_relative ./api/auth.proto

generate-code:
	mkdir -p ./pkg/code
	protoc --go_out=./pkg/code --go-grpc_out=./pkg/code  ./api/auth_code.proto

generate-ent:
	mkdir -p ./pkg/ent
	cp -R ./schema ./pkg/ent/schema
	go run -mod=mod entgo.io/ent/cmd/ent generate ./pkg/ent/schema

#rm -r ./pkg/ent/schema
generate:
	make generate-proto generate-code generate-ent

run:
	go run ./cmd/.