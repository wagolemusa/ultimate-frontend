FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["npm", "start"]
