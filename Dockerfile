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
# Copy logo file manually
COPY --from=build-stage /app/logo.png /usr/share/nginx/html/logo.png
# Fix case sensitivity issues by creating symlinks for JS files
RUN cd /usr/share/nginx/html/assets && \
    for file in *.js; do \
        # Create lowercase version
        lowercase_file=$(echo "$file" | tr '[:upper:]' '[:lower:]'); \
        ln -sf "$file" "$lowercase_file"; \
        # Create mixed case version (first letter lowercase, rest as is)
        mixed_case_file=$(echo "$file" | sed 's/^./\L&/'); \
        ln -sf "$file" "$mixed_case_file"; \
        # Create specific symlinks for common patterns
        if [[ "$file" == "Index.md.Bx4t8sHe.js" ]]; then \
            ln -sf "$file" "index.md.Bx4t8sHe.js"; \
        fi; \
        if [[ "$file" == "Index.md.Bx4t8sHe.lean.js" ]]; then \
            ln -sf "$file" "index.md.Bx4t8sHe.lean.js"; \
        fi; \
    done
# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
