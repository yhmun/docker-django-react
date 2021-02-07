FROM node:15.8.0-alpine AS build

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci --silent

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run build


FROM nginx:1.19.0-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d

RUN rm /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
