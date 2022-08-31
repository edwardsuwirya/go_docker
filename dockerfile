FROM node:current-alpine as build-step
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-step /app/build /usr/share/nginx/html
