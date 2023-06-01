#syntax=docker/dockerfile:1.2

# ---- Base Node ----
FROM node:18-alpine3.17 AS base

# set working directory
WORKDIR /app


EXPOSE 3000

COPY . .

RUN npm i

CMD ["npm", "start"]

