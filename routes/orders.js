const express = require('express')

const router = express.Router()

// GET /orders/ — list all
router.get('/', (req, res) => {
  res.send('All orders')
})

// GET /orders/:id — get one
router.get('/:id', (req, res) => {
  res.send(`Get order with id ${req.params.id}`)
})

// POST /orders/ — create new
router.post('/', (req, res) => {
  res.send('Create new order')
})

// PUT /orders/:id — replace entirely
router.put('/:id', (req, res) => {
  res.send(`Replace order with id ${req.params.id}`)
})

// PATCH /orders/:id — partial update
router.patch('/:id', (req, res) => {
  res.send(`Update order with id ${req.params.id}`)
})

// DELETE /orders/:id — remove
router.delete('/:id', (req, res) => {
  res.send(`Delete order with id ${req.params.id}`)
})

module.exports = router
