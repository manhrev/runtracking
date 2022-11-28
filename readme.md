## Summary

- GO_VERSION="1.18.3"
- PROTOC_VERSION="3.19.4"
- PROTOC_GEN_GO_VERSION="1.28.0"
- PROTOC_GEN_GO_GRPC_VERSION="1.2.0"
- PROTOC_GEN_GRPC_WEB_VERSION="1.3.1"
- PROTOC_GEN_VALIDATE_VERSION="0.6.2"
- PROTOC_GRPC_GATEWAY_VERSION="2.10.0"

## Install Go

1. Download [Downloads - The Go Programming Language](https://go.dev/dl/) to ```~/Downloads``` folder
2. Install for ubuntu(for other os, please check this document [Download and install - The Go Programming Language](https://go.dev/doc/install) )
   
   ```
   cd ~/Downloads
   sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.18.3.linux-amd64.tar.gz
   ```
3. Create folder ```$HOME/go-workspace``` and ```$HOME/go-workspace/bin```
   ```
   mkdir -p $HOME/go-workspace/bin
   ```
4. Setup env in bash file (~/.bashrc or ~/.zshrc) 
   ```
   export GOROOT="/usr/local/go"
   export GOPATH="$HOME/go-workspace"
   export GOBIN="$HOME/go-workspace/bin"
   export GOPRIVATE="gitlab.com"
   export PATH="$GOROOT/bin:$GOPATH/bin:$PATH"
   ```

## Install Protocol Compiler (protoc)

### Summary

- Protocol Buffers - Google's data interchange format.
- Protocol Buffers (a.k.a., protobuf) are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data.
- The protocol buffer compiler, protoc, is used to compile .proto files, which contain service and message definitions. (source)

### Install

1. Download the pre-build binary for your OS [Release Protocol Buffers v3.19.4 protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf/releases/tag/v3.19.4)\
   For Ubuntu [protoc-3.19.4-linux-x86_64.zip](https://github.com/protocolbuffers/protobuf/releases/download/v3.19.4/protoc-3.19.4-linux-x86_64.zip)

2. Unzip the file

```
cd ~/Downloads
unzip protoc-3.19.4-linux-x86_64.zip -d ~/go-workspace/bin/protoc
```

3. Update PATH in .bashrc or .zshrc

```vim ~/.zshrc
# Add this line to the end
export PATH="$HOME/go-workspace/bin/protoc/bin:$PATH"
```

## Install Go plugins for the Protocol Compiler

### Summary

1. [protobuf-go](https://github.com/protocolbuffers/protobuf-go): Go support for Google's protocol buffers
   - The [protoc-gen-go](https://pkg.go.dev/google.golang.org/protobuf/cmd/protoc-gen-go) tool is a compiler plugin to protoc, the protocol buffer compiler. It augments the protoc compiler so that it knows how to generate Go specific code for a given .proto file.
   - The protoc-gen-go binary is a protoc plugin to generate Go code for both proto2 and proto3 versions of the protocol buffer language.
2. [gRPC](https://grpc.io/): A high performance, open source, general RPC framework that puts mobile and HTTP/2 first.
3. [gRPC-Go](https://github.com/grpc/grpc-go): The Go implementation of gRPC.

   - [protoc-gen-go-grpc](https://github.com/grpc/grpc-go/tree/master/cmd/protoc-gen-go-grpc): This tool generates Go language bindings of services in protobuf definition files for gRPC.

   - Note: The v1.20 [protoc-gen-go](https://developers.google.com/protocol-buffers/docs/reference/go-generated#invocation) does not support generating gRPC service definitions. In the future, gRPC service generation will be supported by a new [protoc-gen-go-grpc](https://github.com/grpc/grpc-go/tree/master/cmd/protoc-gen-go-grpc) plugin provided by the Go gRPC project.
4. [gRPC Web](https://github.com/grpc/grpc-web): (gRPC for Web Clients): A JavaScript implementation of gRPC for browser clients.

### Install

Download the pre-build binary for your OS & copy to your bin directory

1. protoc-gen-go:
   ```go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28.0```
2. protoc-gen-go-grpc:
   ```go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2.0```
3. protoc-gen-grpc-web: [Release Release 1.3.1 · grpc/grpc-web](https://github.com/grpc/grpc-web/releases/tag/1.3.1). 
   - For linux: [protoc-gen-grpc-web-1.3.1-linux-x86_64](https://github.com/grpc/grpc-web/releases/download/1.3.1/protoc-gen-grpc-web-1.3.1-linux-x86_64)
   
      ```
      $ sudo mv ~/Downloads/protoc-gen-grpc-web-1.3.1-linux-x86_64 \
      $HOME/go-workspace/bin/protoc-gen-grpc-web
      $ chmod +x $HOME/go-workspace/bin/protoc-gen-grpc-web
      ```

## Install gRPC-Gateway

### Summary

[gRPC-Gateway](https://github.com/grpc-ecosystem/grpc-gateway): gRPC to JSON proxy generator following the gRPC HTTP spec.

### Install

## Install protoc-gen-validate
  
   ```
   go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.10.0
   go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.10.0
   ```

### Summary
   [protoc-gen-validate](https://github.com/envoyproxy/protoc-gen-validate): Protoc plugin to generate polyglot message validators

### Install

1. Clone and checkout with the version [envoyproxy/protoc-gen-validate](https://github.com/envoyproxy/protoc-gen-validate)
   
   ```
   git clone https://github.com/envoyproxy/protoc-gen-validate $GOPATH/src/github.com/envoyproxy/protoc-gen-validate
   cd $GOPATH/src/github.com/envoyproxy/protoc-gen-validate
   git checkout v0.6.2
   ```

2. Install

   ```
   go install github.com/envoyproxy/protoc-gen-validate@v0.6.2
   ```