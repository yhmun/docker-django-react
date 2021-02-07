FROM node:15.8.0-alpine AS builder

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci --silent

ENV PATH="./node_modules/.bin:$PATH"

COPY . .
RUN npm run build

CMD ["npm", "start"]
