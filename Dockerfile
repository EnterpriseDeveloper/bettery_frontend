# Multi-stage build for production
FROM node:24.1.0-slim AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build --prod

# Production stage
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/dist/Quiz /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]