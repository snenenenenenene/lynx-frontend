FROM node:latest

EXPOSE 8080

WORKDIR /usr/src/app

RUN npm install express --save
RUN npm install nano --save
RUN npm install cors --save
RUN npm install -g loadtest --save

COPY server.js /usr/src/app/server.js
COPY /public /usr/src/app/public

CMD ["node", "server.js"]
