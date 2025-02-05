FROM node:23.7.0

WORKDIR /store-frontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]