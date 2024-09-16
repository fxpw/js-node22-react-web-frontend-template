FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

EXPOSE 3000

# CMD ["npm", "start"]
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then npm build; else npm start; fi"]