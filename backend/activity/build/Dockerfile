FROM golang:1.18.3-alpine 
WORKDIR /app
COPY ./../ /app/
WORKDIR /app/cmd/
RUN go build -o /server
COPY wait-for-it.sh /wait-for-it.sh
COPY build/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /wait-for-it.sh /docker-entrypoint.sh
RUN apk add --no-cache bash
EXPOSE 8080
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["/server"]