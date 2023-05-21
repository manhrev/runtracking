FROM golang:1.18.3-alpine
RUN apk add git
WORKDIR /app
COPY ./ /app/
WORKDIR /app/cmd/
RUN go build -o /server
EXPOSE ${LISTEN_PORT}
CMD ["/server"]