# Base image
FROM node:22-alpine

# Working directory
WORKDIR /app

# Copy from to
COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

#File system -> nodejs files
#
#rm -rf index2.js
#
#Run container
#
#Truy cap vo index2.js -> ko thay

#Nodejs files
#
#RUN npm install -> Nodejs files + files src (index2.js) + express files
#RUN rm index2.js -> Docker layer che khuat file index2.js