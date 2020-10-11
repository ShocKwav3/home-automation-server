FROM node:12
WORKDIR /usr/src/app/home_automation_server
COPY package*.json ./
RUN yarn install
COPY . .

#RUN yarn build
