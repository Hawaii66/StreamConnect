FROM node:latest

WORKDIR /app/server

COPY ./server/package*.json ./
COPY ./server/tsconfig*.json ./

RUN npm install
COPY ./server .

RUN npm run build

ENV PORT=5000

EXPOSE 5000
