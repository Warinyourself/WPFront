FROM node:11.13.0-alpine

RUN mkdir -p /usr/src/front
WORKDIR /usr/src/front

RUN apk update && apk upgrade && apk add git

COPY . /usr/src/front/
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "dev" ]