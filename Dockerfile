FROM node:12-alpine
RUN apk update && apk upgrade
WORKDIR /usr/src/app
COPY package.json ./
RUN npm --quiet install
COPY index.js ./
COPY images images

ENTRYPOINT ["npm"]
CMD ["start"]
