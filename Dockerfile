FROM node:10.15-alpine

COPY . /app
WORKDIR /app

RUN npm install

RUN npm run build

CMD npm run production
