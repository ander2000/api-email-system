# Nodejs MYSQL REST API

### Installation

```
git clone https://github.com/fazt/nodejs-mysql-restapi
cd nodejs-mysql-restapi
docker-compose up
npm install
npm run dev
```

### TODO

- [ ] upload images
- [ ] create authentication and authorization
- [ ] add validation
- [ ] improve error handling
- [ ] complete the tests
- [ ] docker for production


# DOCKER
# stop image
docker stop example_api_container
# remove image
docker rm example_api_container
docker image rm image_example_api_container
# build image
docker build --no-cache -t image_example_api_container .
# run image on background process  host_port:container_port
docker run --restart unless-stopped -d -p 3020:3000 --name example_api_container image_example_api_container
# run image on CLI
docker run --restart unless-stopped -it -p 3020:3000 --name example_api_container image_example_api_container



docker stop example_api_container
docker rm example_api_container
docker image rm image_example_api_container
docker build --no-cache -t image_example_api_container .
# run image on CLI
docker run --restart unless-stopped -it -p 3020:3000 --name example_api_container image_example_api_container