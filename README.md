# Smart E-commerce Platform with AI assistant

This is a complete scalable Cloud Native web application based on a Microservices Architecture using Node.js, Express, MongoDB, RabbitMQ, React, and OpenAI API.

## Project Structure

- `frontend`: React app (Vite)
- `api-gateway`: Central entry point, routes traffic, handles authentication verification.
- `auth-service`: User registration, login, JWT.
- `product-service`: Product CRUD. Publishes messages to RabbitMQ on creation.
- `ai-service`: Interacts with OpenAI for descriptions, recommendations, and chat. Listens to RabbitMQ.

## Prerequisites
- Node.js v18+
- MongoDB running locally on `mongodb://127.0.0.1:27017`
- RabbitMQ running locally on `amqp://localhost:5672`
- An OpenAI API Key

## Getting Started

1. Copy `.env.example` to `.env` in the root folder (or each service if needed, but we will use the shared one locally by pointing dotenv to it, or copying it into each).
   _Note: In this implementation, each service should ideally have its own `.env` file, but for simplicity you can copy the variables into each service's `.env` file._

2. Start MongoDB and RabbitMQ locally.

3. Install dependencies and start each service:
   - `cd api-gateway && npm install && npm run dev` (Port 3000)
   - `cd auth-service && npm install && npm run dev` (Port 3001)
   - `cd product-service && npm install && npm run dev` (Port 3002)
   - `cd ai-service && npm install && npm run dev` (Port 3003)
   - `cd frontend && npm install && npm run dev`

4. Test using the provided `test-api.http` file or the Swagger UI at `http://localhost:3000/api-docs`.
