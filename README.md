# Daystar E-Commerce API

REST API built with Node.js and Express.
Base URL: `http://127.0.0.1:8000/api/v1/`

## Project Structure

```
ecommerce-api/
├── index.js                  ← App entry point, registers all routes
├── package.json              ← Dependencies
├── data/
│   └── store.js              ← In-memory dummy data for all resources
├── middleware/
│   ├── routeFactory.js       ← Generates CRUD routes for any resource
│   └── errorHandler.js       ← Global error handler
└── routes/
    ├── products.js           ← GET/POST/PUT/PATCH/DELETE /api/v1/products
    ├── orders.js             ← GET/POST/PUT/PATCH/DELETE /api/v1/orders
    ├── clients.js            ← GET/POST/PUT/PATCH/DELETE /api/v1/clients
    ├── vendors.js            ← GET/POST/PUT/PATCH/DELETE /api/v1/vendors
    ├── payments.js           ← GET/POST/PUT/PATCH/DELETE /api/v1/payments
    ├── carts.js              ← GET/POST/PUT/PATCH/DELETE /api/v1/carts
    ├── reviews.js            ← GET/POST/PUT/PATCH/DELETE /api/v1/reviews
    ├── reports.js            ← GET/POST/PUT/PATCH/DELETE /api/v1/reports
    ├── returns.js            ← GET/POST/PUT/PATCH/DELETE /api/v1/returns
    └── history.js            ← GET/POST/PUT/PATCH/DELETE /api/v1/history
```

## Setup & Run

```bash
npm install
node index.js
```

## Endpoints (same pattern for all 10 resources)

| Method | URL                        | Action              |
|--------|----------------------------|---------------------|
| GET    | /api/v1/products/          | List all products   |
| GET    | /api/v1/products/:id       | Get one product     |
| POST   | /api/v1/products/          | Create a product    |
| PUT    | /api/v1/products/:id       | Replace a product   |
| PATCH  | /api/v1/products/:id       | Update fields       |
| DELETE | /api/v1/products/:id       | Delete a product    |
