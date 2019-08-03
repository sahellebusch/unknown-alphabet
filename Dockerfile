FROM node:lts-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENTRYPOINT ["npm run test:watch"]
