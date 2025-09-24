FROM node:24.8.0-alpine3.21 AS build-stage

WORKDIR /app
# Copy package files

COPY . .

RUN npm ci

RUN npm run docs:build

# Stage 2: Serve with Nginx
FROM nginx:1.28-alpine
# Remove default nginx files
# RUN rm -rf /usr/share/nginx/html/*
# Copy our built files
COPY --from=build-stage /app/.vitepress/dist /usr/share/nginx/html
# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
