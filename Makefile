tidy:
	cd ./backend/activity && go mod tidy && go mod vendor
	cd ./backend/auth && go mod tidy && go mod vendor
	cd ./backend/group && go mod tidy && go mod vendor
	cd ./backend/notification && go mod tidy && go mod vendor
	cd ./backend/plan && go mod tidy && go mod vendor
	cd ./backend/group && go mod tidy && go mod vendor