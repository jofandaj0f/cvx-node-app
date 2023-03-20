FROM node:current-alpine3.16
LABEL Created by Jonathan Ferraro

# Create app directory
RUN echo 'Creating App Directories'
RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

# Install app dependencies
RUN echo 'Installing via NPM'
COPY package*.json ./
RUN npm install

# Bundle app source
RUN echo 'Copy Source bundle to Container'
COPY . .

#Open up containers ports app and mysql (3306) respectively
RUN echo 'Opening Port 3001'
EXPOSE 3001 

#Start Node for NodeJS
CMD [ "npm", "run", "build"]
