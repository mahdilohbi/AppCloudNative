# TODO — Cloud Native Node.js Microservices (Professional Upgrade)

## Step 1: Cleanup
- [x] Update root `.gitignore` to include `node_modules/` everywhere
- [x] Remove existing `node_modules` folders from the repo
- [x] Prepare a lightweight final zip exclusion (no `node_modules`)



## Step 2: Backend production hardening (foundation)
- [ ] Add shared structure: `config/`, `middleware/errorHandler.js`, `utils/logger.js`
- [ ] Add `helmet`, `express-rate-limit`, standardized CORS config
- [ ] Add `morgan` logging to each service

## Step 3: JWT Authentication correctness
- [x] Fix API Gateway auth enforcement for protected routes (replace unreliable proxy `filter` logic)

- [ ] Standardize JWT error handling (missing/invalid/expired)
- [ ] Ensure all protected routes return `{ success:false, message:"..." }`

## Step 4: Data validation (Joi)
- [ ] Add Joi validation for auth: register, login
- [ ] Add Joi validation for products: create/update
- [ ] Add Joi validation for AI: chat/recommend/generate-description

## Step 5: Global error handling
- [ ] Implement `middleware/errorHandler.js` for consistent JSON errors
- [ ] Wire it into each service

## Step 6: RabbitMQ reconnection + config
- [ ] Create `config/rabbitmq.js`
- [ ] Refactor producer/consumer to include auto reconnection
- [ ] Add clear connection/reconnect logs + ack/nack strategy

## Step 7: Swagger completeness
- [ ] Expand route documentation (request/response schemas)
- [ ] Confirm `/api-docs` works and includes all endpoints

## Step 8: Docker + deployment readiness
- [ ] Add Dockerfile for each microservice + frontend
- [ ] Improve root `docker-compose.yml` to build services and wire env
- [ ] Add `.env.example` files (root + per service as needed)
- [ ] Add production scripts + deployment instructions for Render/Railway/Vercel

## Step 9: Frontend improvements
- [ ] Improve API error handling
- [ ] Add consistent loading states
- [ ] Verify responsive layout

## Step 10: test.rest
- [ ] Create `test.rest` (VSCode REST Client compatible) with variables `@baseUrl` and `@token`
- [ ] Include Register, Login, JWT-protected Product CRUD, AI API testing

## Step 11: Final verification
- [ ] Run `npm install` + `npm start` for each service
- [ ] Run `docker compose up`
- [ ] Execute `test.rest` and confirm integration behavior
- [ ] Create final zip (no node_modules)

