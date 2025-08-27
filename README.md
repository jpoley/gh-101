# Hello App

A minimal full-stack web application demonstrating GitHub Actions, GitHub Advanced Security (GHAS), and Dependabot integration.

## Overview

This application showcases a complete end-to-end development workflow with:
- **Backend**: Node.js/Express API serving JSON responses
- **Frontend**: React application consuming the backend API
- **Containerization**: Docker multi-stage build serving both frontend and backend
- **CI/CD**: GitHub Actions for automated testing and building
- **Security**: Dependabot for dependency management and GHAS for code scanning

## Features

- **API Endpoint**: `/api/hello` returns `{"message": "Hello from backend!"}`
- **Frontend UI**: Displays the backend message dynamically
- **Health Check**: `/health` endpoint for monitoring
- **Dockerized**: Single container serving both frontend and backend
- **Tested**: Jest tests for backend API endpoints

## Quick Start

### Prerequisites
- Node.js 18+
- npm
- Docker (for containerization)

### Development Mode

1. **Start the backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Backend runs on http://localhost:8080

2. **Start the frontend** (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm start
   ```
   Frontend runs on http://localhost:3000

### Production Mode (Docker)

1. **Build and run the Docker container:**
   ```bash
   docker build -t hello-app .
   docker run -p 3000:3000 hello-app
   ```

2. **Visit the application:**
   - Main app: http://localhost:3000
   - API endpoint: http://localhost:3000/api/hello
   - Health check: http://localhost:3000/health

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Build Test
```bash
cd frontend
npm run build
```

## Project Structure

```
/
├── backend/                 # Node.js/Express API
│   ├── package.json        # Backend dependencies
│   ├── index.js            # Express server
│   └── tests/
│       └── api.test.js     # API tests
├── frontend/               # React application
│   ├── package.json       # Frontend dependencies
│   ├── public/
│   │   └── index.html     # HTML template
│   └── src/
│       ├── index.js       # React entry point
│       └── App.js         # Main React component
├── .github/
│   ├── workflows/
│   │   └── ci.yml         # GitHub Actions workflow
│   └── dependabot.yml    # Dependabot configuration
├── Dockerfile             # Multi-stage Docker build
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) automatically:

1. **Tests**: Runs backend Jest tests
2. **Builds**: Compiles frontend React application
3. **Dockerizes**: Creates Docker image with multi-stage build
4. **Validates**: Tests the Docker container endpoints

## Security & Dependencies

- **Dependabot**: Configured to check for dependency updates weekly
- **GHAS**: Enable GitHub Advanced Security in repository settings for:
  - Code scanning alerts
  - Secret scanning
  - Dependency vulnerability alerts

## API Documentation

### Endpoints

#### `GET /api/hello`
Returns a greeting message from the backend.

**Response:**
```json
{
  "message": "Hello from backend!"
}
```

#### `GET /health`
Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "OK"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

The CI pipeline will automatically test your changes.

## License

MIT License
