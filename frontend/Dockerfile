# pull official base image
FROM node:15.8.0-alpine

# set work directory
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install -g npm@latest
RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build

CMD ["serve", "-l", "3000", "-s", "."]
