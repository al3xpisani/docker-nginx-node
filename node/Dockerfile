FROM node:21.6.2-slim

ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*
#The instructions above applies root automatically by docker

#The instructions below applies node user
USER node
WORKDIR /usr/src/app

#This means everytime docker runs the docker-compose and create volume it will run based 
#on the node user and node_modules will be node rights so Im able to read and write
#node_modules from host side.