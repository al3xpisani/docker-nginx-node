FROM nginx:1.25.4

WORKDIR /app
RUN apt-get update && \
    apt-get install vim -y

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx","-g","daemon off;" ]