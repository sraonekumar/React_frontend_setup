# React_frontend_setup
React frontend architectural setup

To Dockerfile Commands

To Building image
docker build -t hello-world:dev .

TO Run a Conatiner
docker run -it --rm \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
hello-world:dev
