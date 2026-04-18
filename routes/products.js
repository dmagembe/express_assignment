const express = require('express')

const router = express.Router()

// GET /products/ — list all
router.get('/', (req, res) => {
  res.send('All products')
})

// GET /products/:id — get one
router.get('/:id', (req, res) => {
  res.send(`Get product with id ${req.params.id}`)
})

// POST /products/ — create new
router.post('/', (req, res) => {
  
  res.send('Create new product')
})

// PUT /products/:id — replace entirely
router.put('/:id', (req, res) => {
  res.send(`Replace product with id ${req.params.id}`)
})

// PATCH /products/:id — partial update
router.patch('/:id', (req, res) => {
  res.send(`Update product with id ${req.params.id}`)
})

// DELETE /products/:id — remove
router.delete('/:id', (req, res) => {
  
  res.send(`Delete product with id ${req.params.id}`)
})

module.exports = router
