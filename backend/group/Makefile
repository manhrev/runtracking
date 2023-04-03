generate-proto:
	mkdir -p ./pkg/api
	protoc \
		--go_out=./pkg \
		--go_opt=paths=source_relative \
		--go-grpc_out=./pkg \
		--go-grpc_opt=paths=source_relative \
		./api/group.proto ./api/groupi.proto

generate-code:
	mkdir -p ./pkg/code
	protoc \
		--go_out=./pkg/code \
		--go-grpc_out=./pkg/code  \
		./api/group_code.proto

generate-ts:
	mkdir -p ./pkg/ts
	protoc -I=./api --js_out=import_style=commonjs:./pkg/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:./pkg/ts ./api/group.proto
	protoc -I=./api --js_out=import_style=commonjs:./pkg/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:./pkg/ts ./api/group_code.proto

generate-ent:
	mkdir -p ./pkg/ent
	cp -R ./schema ./pkg/ent/schema
	go run -mod=mod entgo.io/ent/cmd/ent generate ./pkg/ent/schema --feature sql/modifier
# rm -r ./pkg/ent/schema
	
generate:
	make generate-proto generate-code generate-ent generate-cache

run:
	go run ./cmd/.

reset-schema:
	rm -rf ./pkg/ent
	make generate-ent
	sudo rm -rf ../../tmp/db/group
	docker rm --force --volumes db-group
	docker compose build group
	go mod tidy
	go mod vendor
