const express = require('express')

const router = express.Router()

// GET /clients/ — list all
router.get('/', (req, res) => {
  res.send('All clients')
})

// GET /clients/:id — get one
router.get('/:id', (req, res) => {
  res.send(`Get client with id ${req.params.id}`)
})

// POST /clients/ — create new
router.post('/', (req, res) => {
  res.send('Create new client')
})

// PUT /clients/:id — replace entirely
router.put('/:id', (req, res) => {
  res.send(`Replace client with id ${req.params.id}`)
})

// PATCH /clients/:id — partial update
router.patch('/:id', (req, res) => {
  res.send(`Update client with id ${req.params.id}`)
})

// DELETE /clients/:id — remove
router.delete('/:id', (req, res) => {
  res.send(`Delete client with id ${req.params.id}`)
})

module.exports = router
