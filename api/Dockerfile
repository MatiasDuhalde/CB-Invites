FROM node:current-alpine3.12

WORKDIR /api

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . ./

CMD ["yarn", "start"]
