yarn init -y

yarn add typesscript -D
yarn add
tsc --watch
yarn add tsc-watch -D


yarn add express
yarn add
@types/express -D

npx tsc --init

set root directory in typescript

"rootDir": "./src",
"outDir": "./build",

yarn dev
node build/index.js

yarn add @apollo/server
yarn add body-parser
yarn add graphql

now we will setup postgress database

npx gitignore Node
git init

git add .
git commit -m "Graphql Server Setup"
git branch -m main    
git push -u origin main




https://github.com/new

now name that threads-app-graphql

git remote add origin https://github.com/ashu-gfx/threads-app-graphql.git



https://docs.docker.com/compose/

https://docs.docker.com/compose/gettingstarted/

docker compose up -d

git add .
git commit -m "setup dev containers"
git push


next video

yarn add  prisma typescript tsx @types/node -D

npx prisma init

copy user name from docker compose and add that to .env  postgres url 

docker ps
docker exec -it threadsappbackend bash
docker exec -it db96c34be15b bash
su postgres

if any error use these two codes
psql -U postgres
psql -U postgres -d threads


psql


psql -d postgres

terminal type postgres will run \l command
- postgres-# \l


\l
\c threads

terminal threads needed to run next code
threads-#


\d

npx prisma migrate dev --name create_users_table

\d
\d users

yarn dev


now in our local host 8000/graphql go to 
root -> mutation -> createUser


threads=# select * from users;
select * from users;

after mutation2 image process

retry select * from users;

for exiting use q

\x
select * from users;

now lets push our code to github

git add .
git commit -m "Prima Setup Done"
git push

git add .
git commit -m "Code Refactor"
git push


if we do any changes in prisma we have to run this command

npx prisma migrate dev --name make_last_name_optional 

now we will delete our old database inside threads and replace with new one

threads=# \x
threads=# select * from users      
threads-# \d

delete from users where 1=1;

next step image3

next 
threads=# select * from users; 

lets delete the error occuring user from records

delete from users where email = '@mail';

yarn add 
jsonwebtoken

yarn add 
@types/jsonwebtoken

git add .
git commit -m "Added User signup and signin"
git push