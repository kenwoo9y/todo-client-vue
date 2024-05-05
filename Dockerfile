FROM node:22-alpine3.18

WORKDIR /app

COPY client/ ./
RUN apk add --update

CMD ["npm", "run", "dev"]