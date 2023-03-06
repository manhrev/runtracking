module github.com/manhrev/runtracking/backend/auth

replace github.com/manhrev/runtracking/backend/notification => ../notification

go 1.18

require (
	entgo.io/ent v0.11.7
	github.com/envoyproxy/go-control-plane v0.10.3
	github.com/go-sql-driver/mysql v1.7.0
	github.com/gogo/googleapis v1.4.1
	github.com/manhrev/runtracking/backend/notification v0.0.0-20230220100914-c8fcfa93b5ee
	google.golang.org/genproto v0.0.0-20230110181048-76db0878b65f
	google.golang.org/grpc v1.53.0
	google.golang.org/protobuf v1.28.1
)

require (
	github.com/cespare/xxhash/v2 v2.2.0 // indirect
	github.com/dgryski/go-rendezvous v0.0.0-20200823014737-9f7001d12a5f // indirect
	github.com/fsnotify/fsnotify v1.6.0 // indirect
	github.com/kr/pretty v0.3.0 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	go.uber.org/atomic v1.9.0 // indirect
	go.uber.org/multierr v1.8.0 // indirect
)

require (
	ariga.io/atlas v0.9.1-0.20230119145809-92243f7c55cb // indirect
	github.com/agext/levenshtein v1.2.1 // indirect
	github.com/apparentlymart/go-textseg/v13 v13.0.0 // indirect
	github.com/cncf/xds/go v0.0.0-20230105202645-06c439db220b // indirect
	github.com/envoyproxy/protoc-gen-validate v0.9.1 // indirect
	github.com/go-openapi/inflect v0.19.0 // indirect
	github.com/go-redis/redis/v8 v8.11.5
	github.com/gogo/protobuf v1.3.2 // indirect
	github.com/golang-jwt/jwt v3.2.2+incompatible
	github.com/golang/protobuf v1.5.2 // indirect
	github.com/google/go-cmp v0.5.9 // indirect
	github.com/google/uuid v1.3.0
	github.com/hashicorp/hcl/v2 v2.13.0 // indirect
	github.com/mitchellh/go-wordwrap v0.0.0-20150314170334-ad45545899c7 // indirect
	github.com/sirupsen/logrus v1.9.0
	github.com/zclconf/go-cty v1.8.0 // indirect
	go.uber.org/zap v1.23.0
	golang.org/x/mod v0.7.0 // indirect
	golang.org/x/net v0.5.0 // indirect
	golang.org/x/sys v0.4.0 // indirect
	golang.org/x/text v0.6.0 // indirect
)
