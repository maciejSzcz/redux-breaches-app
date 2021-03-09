FROM node:14 AS build

WORKDIR /app

COPY package.json /app/
RUN yarn install --network-timeout 100000

COPY ./ /app/

RUN yarn run build-localhost

FROM nginx:latest
COPY --from=build /app/build/ /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


