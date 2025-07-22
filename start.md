docker compose up -d
yarn dev

to run existing container 
docker start db96c34be15b
or
docker start threads-db

or for removing and remaking the same container we can use 
docker rm threads-db
docker compose up -d


or we can reconnect our project to the existing container 

docker ps -a

docker exec -it threads-db bash

docker start threads-db

