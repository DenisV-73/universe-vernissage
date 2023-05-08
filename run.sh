#docker rm dockerize-vuejs-app-1 -f

docker build -t vuejs-cookbook/dockerize-vuejs-app .
#
docker run -d -it -p 7791:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
#