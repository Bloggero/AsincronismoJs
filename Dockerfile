# syntax=docker/dockerfile:1
FROM node:14
RUN npm install
WORKDIR /
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY . .
CMD ["node", "src/promise/challenge-post.js"]
EXPOSE 3000