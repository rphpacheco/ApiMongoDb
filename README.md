# apiMongoDB (v. 1.0)

## Indice

1. [Objetivo](#objetivo)
2. [Requisitos](#requisitos)
3. [Dependências](#dependências)
4. [API](#api)

## Objetivo

Api de fácil implementação onde é possível a busca de dados em uma base MongoDB.

## Requisitos

É preciso instalar o pm2 `npm install pm2 -g`

## Dependências

nodeJs
express
mongodb
body-parser
consign

- Execute o comando `npm install` para instalar todos as dependências do projeto.
- Execute o comando `npm run dev` para iniciar a API em ambiente de desenvolvimento.
- Execute o comando `npm run production` para iniciar a API em ambiente de produção.

## API

> Deverá ser incluído nos Headers os parâmetros skip e limit. Caso não sejam informados, a API considerará o valor 0 para skip e 1 para limit.

### Chamada

- GET `http://localhost/v1/api`