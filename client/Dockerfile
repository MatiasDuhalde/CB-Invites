FROM node:current-alpine3.12

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

CMD ["yarn", "start"]
