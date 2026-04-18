const express = require('express')

//  Import all route files
const productRoutes   = require('./routes/products')
const orderRoutes     = require('./routes/orders')
const clientRoutes    = require('./routes/clients')
const vendorRoutes    = require('./routes/vendors')
const paymentRoutes   = require('./routes/payments')
const cartRoutes      = require('./routes/carts')


// Import error handler middleware
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(express.json())


// ROUTES
app.use('/api/v1/products',  productRoutes)  
app.use('/api/v1/orders',    orderRoutes)     
app.use('/api/v1/clients',   clientRoutes)    
app.use('/api/v1/vendors',   vendorRoutes)    
app.use('/api/v1/payments',  paymentRoutes)   
app.use('/api/v1/carts',     cartRoutes)      


app.get('/', (req, res) => {
  res.send('Welcome to my e-commerce store')
})
// ── Global error handler (must come AFTER all routes) ────────
app.use((req, res) => {
  res.status(404).send('Route not found')
})
app.use(errorHandler)

// ============================================================
// START SERVER
// ============================================================
const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
