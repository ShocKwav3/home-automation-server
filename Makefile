setup:
	docker volume create db_data
buildDevServer:
	docker build -t home_automation_server .
devServerUp:
	docker-compose -f docker-compose.dev.yml up
devServerDown:
	docker-compose down
cleanDist:
	rm -rf dist/
sshToDev:
	docker exec -it home-automation-server_$(destination)_1 /bin/sh
