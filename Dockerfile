FROM node:10-alpine
WORKDIR /apps/home_automation_server
COPY package.json /apps/home_automation_server/
COPY yarn.lock /apps/home_automation_server/
RUN yarn install
COPY . /apps/home_automation_server