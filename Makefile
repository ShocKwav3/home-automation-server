setup:
	docker volume create nodemodules
buildServer:
	docker build -t home_automation_server .
	#docker-compose -f docker-compose.builder.yml run --rm install
serverUp:
	docker-compose up
cleanDist:
	rm -rf dist/