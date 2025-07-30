# Todo API

A simple REST API made as a project for IPSSI, for managing tasks built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete tasks
- MongoDB database integration
- Docker containerization
- Automated testing with Jest
- CI/CD with GitHub Actions

## Quick Start

### Run Locally
```bash
# Install dependencies
npm install

# Start the server
npm start
```

The API will be available at http://localhost:3000

### Run with Docker
```bash
# Using Docker Compose
docker-compose up --build
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a specific task by MongoDB ID
- `PUT /api/tasks/:id` - Update a task by MongoDB ID
- `DELETE /api/tasks/:id` - Delete a task by MongoDB ID

## Example Usage

You may also use any API Endpoint testing software to test those APIs.

Or use 'curl'

**Create a task:**
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"description": "Learn Docker", "status": "pending"}'
```

**Get all tasks:**
```bash
curl http://localhost:3000/api/tasks
```

## Development

```bash
# Run tests
npm test

# Run linting
npm run lint

# Run tests with coverage
npm run test:coverage
```

## Project Structure

```
todo_api/
├── src/
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   ├── middleware/      # Express middleware
│   └── config/          # Configuration files
├── tests/               # Test files
├── Dockerfile           # Docker configuration
└── docker-compose.yml   # Docker Compose setup
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Jest** - Testing framework
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline