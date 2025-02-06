FROM node:14.16.0-alpine

RUN mkdir /app
WORKDIR /app

COPY LICENSE .
COPY README.md .
COPY build.txt .
COPY ./*.js ./
COPY ./*.json ./

RUN npm install


EXPOSE 3014

CMD ["node", "app.js"]
