tidy:
	cd ./backend/activity && go mod tidy && go mod vendor
	cd ./backend/auth && go mod tidy && go mod vendor
	cd ./backend/group && go mod tidy && go mod vendor
	cd ./backend/notification && go mod tidy && go mod vendor
	cd ./backend/plan && go mod tidy && go mod vendor
	cd ./backend/group && go mod tidy && go mod vendor


docker-build:
	docker compose build activity && \
	docker compose build auth && \
	docker compose build gateway && \
	docker compose build group && \
	docker compose build intermediary && \
	docker compose build notification && \
	docker compose build plan 