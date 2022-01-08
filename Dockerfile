FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8800

CMD yarn start