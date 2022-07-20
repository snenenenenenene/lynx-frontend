FROM node:lts

LABEL maintainer="madnificent@gmail.com"

#RUN apk update && apk upgrade && apk add --no-cache bash git openssh

ENV MU_SPARQL_ENDPOINT 'http://database:8890/sparql'
ENV MU_APPLICATION_GRAPH 'http://mu.semte.ch/application'
ENV NODE_ENV 'production'

ENV LOG_SPARQL_ALL 'true'
ENV DEBUG_AUTH_HEADERS 'true'

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm config set unsafe-perm true && npm install
COPY . .

CMD ["node", "./app.mjs"]
