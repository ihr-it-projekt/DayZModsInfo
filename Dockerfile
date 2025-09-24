FROM node:24.8.0-alpine3.21 AS build-stage

WORKDIR /app
# Copy package files

COPY . .

RUN npm ci

RUN npm run docs:build

# Stage 2: Serve with Nginx
FROM nginx:1.28-alpine
# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*
# Copy our built files
COPY --from=build-stage /app/.vitepress/dist /usr/share/nginx/html
# Create lowercase index.html from Index.html for nginx compatibility
RUN cp /usr/share/nginx/html/Index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
