# Multi-stage Dockerfile
# Stage 1: Build the frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy package files and install dependencies
COPY frontend/package*.json ./
RUN npm ci

# Copy source and build
COPY frontend/ ./
RUN npm run build

# Stage 2: Setup backend and serve both frontend and backend
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files and install dependencies
COPY backend/package*.json ./
RUN npm ci --only=production

# Copy backend source
COPY backend/ ./

# Copy built frontend from previous stage
COPY --from=frontend-builder /app/frontend/build ./public

# Expose port
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production
ENV PORT=3000

# Start the backend server (which will also serve the frontend)
CMD ["node", "index.js"]