FROM node:15.8.0-alpine

ENV PORT=3000 \
    APP_PATH=/usr/src/app

WORKDIR ${APP_PATH}

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE ${PORT}

CMD yarn dev
