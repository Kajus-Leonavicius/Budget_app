#docker image

FROM node:20-alpine

#app folder in container
WORKDIR /app

#copy dependencies from .json files (package and package-lock)
COPY package*.json ./

#intall dependencies
RUN npm i

#cope whole project
COPY . .

#prisma generate
RUN npx prisma generate

#port
EXPOSE 9000

#start app
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]