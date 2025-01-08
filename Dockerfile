FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

# run docker build -t custom-wordpress-api .

# then docker run -d -p 3001:3000 --name custom-wordpress-api custom-wordpress-api

# once run http://host.docker.internal/wordpress/wp-json/wp/v2/users for testing




