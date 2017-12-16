#!/bin/sh

rm -r ./api/build
cd ../api/src/Maa.MortgageCalculator.Endpoints
dotnet publish -c Release -o ../../../docker/api/build

cd ../../../web
yarn build:docker

cd ../docker

docker-compose down
docker-compose build