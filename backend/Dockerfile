# use the alpine image, sthey seem to be pretty good
FROM node:20-alpine

# work directory for the container. we'll just say it is "app"
WORKDIR /usr/src/app

# copy over the package.json to the root of the working directory (the . specifies root)
COPY package.json .

RUN npm install

COPY . /usr/src/app

EXPOSE 5000

CMD ["npm", "run", "start"]