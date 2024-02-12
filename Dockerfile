# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the wait-for-it script
COPY wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

# Copy package.json and package-lock.json to workdir
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Expose port 3000 to be accessible from the outside
EXPOSE 3000

# Command to run the app
CMD ["/usr/wait-for-it.sh", "db:3306", "--", "node", "app.js"]
