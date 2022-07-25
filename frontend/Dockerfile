FROM node:lts-slim as dev
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 4200
CMD ["yarn", "start"]


FROM dev as build
RUN yarn build

FROM nginx:alpine as prod
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /srv
COPY --from=build /app/dist .
EXPOSE 80
