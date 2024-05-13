<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



## Description

This project was done in order to strengthen the knowledge acquired while studying Nestjs, the project is an Api created from 0 inspired by the PokéApi api, which introduces issues of docker, dto, seed, validations, among others.

## Installation

```bash
$ pnpm install

#Nest CLI Installation
$ npm i -g @nestjs/cli
```

## Clone the .env.template file and rename the copy to .env

```
.env.template

.env <--
```

## Up database

```bash
# Docker
$ docker-compose up -d
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```


## Rebuild database

``` bash
# Seed
localhost:3000/api/v2/seed

```


## Production Build

1. Create file ``.env.prod``
2. Fill environment variable
3. Create the new image 

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov


```



## Used Stack

1. ``MongoDB``
2. ``Nestjs``
```
https://docs.nestjs.com/
https://www.mongodb.com/
```



