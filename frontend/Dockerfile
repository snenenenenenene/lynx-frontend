# FROM node:12.15-alpine

FROM alpine:3.16

ENV NODE_VERSION 19.4.0
LABEL maintainer="sennebels@gmail.com"
EXPOSE 4200

RUN apk add --no-cache yarn git
RUN yarn global add ember-cli@4.4.0

RUN mkdir /lynx-frontend
WORKDIR /lynx-frontend
COPY . .

WORKDIR /lynx-frontend/frontend

RUN yarn

# CMD ["ember", "serve", "--port 4200"]
# CMD ["ember", "s"]
CMD ["yarn", "start"]
