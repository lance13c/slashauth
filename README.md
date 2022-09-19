# Slash Auth Code Test

## Production Setup (Local)

1. Install Docker

   ```
   brew install docker
   ```

1. Install Docker Compose

   ```
   brew install docker-compose
   ```

1. Start the docker demon by starting docker desktop

1. Add the env files

   Inside the **./app** folder, create a **.env** file. Add the following variables to the file. The username and password should be empty strings.

   ```
     MONGO_INITDB_ROOT_USERNAME=""
     MONGO_INITDB_ROOT_PASSWORD=""
     MONGO_INITDB_DATABASE="local"
     MONGODB_URI='mongodb://127.0.0.1:27017'
   ```

   Inside the same **./app** folder, create a **.docker.env** file. Add the following variables inside. Insert your own preferred **username**, **password**, and **database name**.

   **Note:** The **MONGODB_URI** is different as it references the mongodb instance in the docker internal network.

   ```
     MONGO_INITDB_ROOT_USERNAME="USER_NAME_HERE"
     MONGO_INITDB_ROOT_PASSWORD="USER_PASSWORD_HERE"
     MONGO_INITDB_DATABASE="DATABASE_NAME_HERE"
     MONGODB_URI='mongodb://mongodb:27017'
   ```

## How To Run Production (Locally)

1. In the root project directory run

   ```
   docker-compose up
   ```

1. Go to the server at [localhost:3000](http://localhost:3000)

## Development Setup

1. Install NodeJS version 16 or 18 at https://nodejs.org or via [nvm](https://github.com/nvm-sh/nvm)
1. Install `pnpm`
   ```
   npm install -g pnpm
   ```
1. Install dependencies
   ```
   pnpm install
   ```
1. In the **database** folder add a **data** folder. Then inside the **data** folder add a **db** folder.
   ```bash
   ├──app
   ├──database
      └── data
          └── db
   ```

## How To Run Development

1. In the root project directory run development server. This will launch both the database and web app.
   ```
   pnpm dev
   ```

### Debugging API

1. Launch the dev server
1. Go to [localhost:3000/api/graphql](http://localhost:3000/api/graphql) as Apollo GraphQL playground
