# use the alpine image, sthey seem to be pretty good
FROM node:20-alpine

# work directory for the container. we'll just say it is "app"
WORKDIR /usr/src/app

# copy over the package.json to the root of the working directory (the . specifies root)
COPY package.json .

# install packages from package.json
RUN npm install

# copy everything in the current directory, and place it into the root directory of the working directory
COPY . /usr/src/app

# expose port number (react default is 3000)
EXPOSE 3000

# run the start script to start the react app
CMD ["npm", "run", "start"]
