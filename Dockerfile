FROM node:10-alpine
WORKDIR /apps/home_automation_server
COPY . /apps/home_automation_server/
RUN yarn install