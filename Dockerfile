FROM node:10-alpine
WORKDIR /apps/home_automation_server_p
COPY . /apps/home_automation_server_p/
RUN yarn install
RUN yarn build
