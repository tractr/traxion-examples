# Stack Examples

To use this repository, follow the steps below:

## Prerequisites

You need to have the following tools installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)

## Installation

### Clone the repository

```bash
git clone git@github.com:tractr/traxion-examples.git
```

### Install project dependencies

```bash
npm install
```

### Generate the required files

```bash
npx prisma generate
```

### Create the environment file

```bash
cp .env.example .env
```

### Launch the Docker Compose that contains the database

```bash
docker compose up -d
```

### Setup de database

```bash
npx prisma db push
npx prisma db seed
```

## Access

### GraphQL Playground

`http://localhost:3000/graphql`

### Api

`http://localhost:3000/api`

## Railway

### Install Railway

```bash
npm install -g @railway/cli
```

or

```bash
brew railway
```

## Connect to railway

```bash
railway login
```

### Link Railway

```bash
railway link
```

### Add Postgres

```bash
railway add --plugin postgresql
```

### Push Prisma schema

```bash
railway run npx prisma db push
```

### Seed databse

```bash
railway run npx prisma db seed
```
