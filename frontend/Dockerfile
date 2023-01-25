

FROM node:12.15-alpine

RUN apk add -no-cache yarn git
RUN yarn global add ember-cli@3.16.0
RUN yarn global add serve@11.1.0

RUN mkdir /app && \
    mkdir /dist
COPY package.json yern.lock /app/
WORKDIR /app
RUN yarn

ARG instance
ENV INSTANCE $instance

ARG API_URI
ENV API_URI $API_URI

COPY . /app
RUN ember build --environment=production && \
    cp -a /app/dist/. /dist/ && \
    cp serve.json /dist/ && \
    rm -rf /app

WORKDIR /dist

EXPOSE 5000
ENTRYPOINT ["serve"]
