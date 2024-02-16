FROM nginx:latest

WORKDIR /app
RUN apt-get update && \
    apt-get install vim -y
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx","-g","daemon off;" ]