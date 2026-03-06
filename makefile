install:
	(cd ./frontend/container && npm install)
	(cd ./frontend/authentication && npm install)
	(cd ./frontend/certification && npm install)

build:
	(cd ./frontend/container && npm run build)
	(cd ./frontend/authentication && npm run build)
	(cd ./frontend/certification && npm run build)

frontend: build
	trap 'kill 0' EXIT; \
	(cd ./frontend/container && npm run preview -- --port 3000) & \
	(cd ./frontend/authentication && npm run preview -- --port 3001) & \
	(cd ./frontend/certification && npm run preview -- --port 3002) & \
	wait
