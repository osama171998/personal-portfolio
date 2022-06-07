From node:alpine as builder

WORKDIR /frontend

copy  ./package.json /frontend

RUN npm install

copy . .


cmd ['npm','run','start']


