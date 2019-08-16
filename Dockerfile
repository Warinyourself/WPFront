FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/front
WORKDIR /usr/src/front

# update and install dependency
RUN apk update && apk upgrade && apk add git

# copy the app, note .dockerignore
COPY . /usr/src/front/
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn build

# expose 5000 on container
EXPOSE 5000

# set front serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set front port
ENV NUXT_PORT=5000

# start the front
CMD [ "yarn", "dev" ]