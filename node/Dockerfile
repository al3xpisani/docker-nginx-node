# FROM node:latest
# WORKDIR /usr/src/app
# COPY node/src/index.js .
# COPY node/package.json .
# RUN npm i express mysql2 @faker-js/faker --save

# RUN --mount=type=bind,source=package.json,target=package.json \ 
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \  
#     --mount=type=cache,target=/root/.npm \  
#     npm ci --include=dev 
# USER node  
# COPY . .  
# CMD npm run dev  

# ENV DOCKERIZE_VERSION v0.7.0
# RUN apt-get update \
#     && apt-get install -y wget \
#     && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
#     && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

# EXPOSE 3000

FROM node:latest
WORKDIR /usr/src/app

COPY node ./
RUN npm ci 

ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000