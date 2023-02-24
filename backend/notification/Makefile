generate-proto:
	mkdir -p ./pkg/api
	protoc \
		--go_out=./pkg \
		--go_opt=paths=source_relative \
		--go-grpc_out=./pkg \
		--go-grpc_opt=paths=source_relative \
		./api/notification.proto ./api/notificationi.proto

generate-code:
	mkdir -p ./pkg/code
	protoc \
		--go_out=./pkg/code \
		--go-grpc_out=./pkg/code  \
		./api/notification_code.proto

generate-ts:
	mkdir -p ./npm/code
	protoc -I=./api --js_out=import_style=commonjs:./npm/code --grpc-web_out=import_style=typescript,mode=grpcwebtext:./npm/code ./api/notification.proto
	protoc -I=./api --js_out=import_style=commonjs:./npm/code --grpc-web_out=import_style=typescript,mode=grpcwebtext:./npm/code ./api/notification_code.proto

generate-ent:
	mkdir -p ./pkg/ent
	cp -R ./schema ./pkg/ent/schema
	go run -mod=mod entgo.io/ent/cmd/ent generate ./pkg/ent/schema --feature sql/versioned-migration
# rm -r ./pkg/ent/schema

migrate: 
	atlas migrate apply --dir "file://pkg/ent/migrate/migrations" \
  	-u "mysql://root:password@1@localhost:33309/notification" \
   	--allow-dirty
	
generate:
	make generate-proto generate-code generate-ent

run:
	go run ./cmd/.