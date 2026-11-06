FROM node:24.22.2-alpine3.24 AS build-stage

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

RUN npm ci

# Copy the rest of the application files
COPY . .

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.31.8-alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy our built files
COPY --from=build-stage /app/.vitepress/dist /usr/share/nginx/html

# Copy logo file manually
COPY --from=build-stage /app/logo.png /usr/share/nginx/html/logo.png

# Copy favicon
COPY --from=build-stage /app/favicon.ico /usr/share/nginx/html/favicon.ico

# Fix case sensitivity issues by creating symlinks for JS files
RUN cd /usr/share/nginx/html/assets && \
    for file in *.js; do \
        lowercase_file=$(echo "$file" | tr '[:upper:]' '[:lower:]'); \
        ln -sf "$file" "$lowercase_file"; \
        first=$(printf '%s' "$file" | cut -c1 | tr '[:upper:]' '[:lower:]'); \
        rest=$(printf '%s' "$file" | cut -c2-); \
        ln -sf "$file" "${first}${rest}"; \
        case "$file" in \
            Index.md.*) \
                lowercase_index="index.md.${file#Index.md.}"; \
                ln -sf "$file" "$lowercase_index" ;; \
        esac; \
    done

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
