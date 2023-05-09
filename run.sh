docker rm dockerize-vuejs-app-2 -f

#docker build -t vuejs-cookbook/dockerize-vuejs-app .
docker build -t vuejs-cookbook/dockerize-vuejs-app2 .
#
#docker run -d -it -p 7791:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
docker run -d -it -p 7792:80 --rm --name dockerize-vuejs-app-2 vuejs-cookbook/dockerize-vuejs-app2
#