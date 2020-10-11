setup:
	docker volume create db_data
buildServer:
	docker build -t home_automation_server .
devServerUp:
	docker-compose -f docker-compose.dev.yml up
devServerDown:
	docker-compose down
cleanDist:
	rm -rf dist/
