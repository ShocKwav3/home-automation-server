setup:
	docker volume create nodemodules
buildServer:
	docker build -t home_automation_server .
	#docker-compose -f docker-compose.builder.yml run --rm install
serverUp:
	docker-compose up
serverDown:
	docker-compose down
cleanDist:
	rm -rf dist/
	