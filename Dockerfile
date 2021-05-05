FROM node:12

WORKDIR /usr/src/app/home_automation_server

COPY package*.json ./
COPY wait-for-it.sh ./
COPY entrypoint.sh ./

RUN chmod a+x ./wait-for-it.sh
RUN chmod a+x ./entrypoint.sh
RUN yarn install

COPY . .

#RUN yarn build
