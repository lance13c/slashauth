# # Use the official lightweight Node.js 16 image.
# # https://hub.docker.com/_/node
FROM node:18.9-alpine3.15

RUN apk --no-cache add --virtual .builds-deps build-base python3 curl

# Create and change to the app directory.
WORKDIR /

## TODO: find way to copy pnpm-lock.yaml 


# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.

# Copy local code to the container image.
COPY . .

RUN npm install -g pnpm
RUN pnpm config set auto-install-peers true
RUN pnpm install

RUN pnpm run build

EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "run", "start" ]