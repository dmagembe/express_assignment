const express = require('express')

const router = express.Router()

// GET /vendors/ — list all
router.get('/', (req, res) => {
  res.send('All vendors')
})

// GET /vendors/:id — get one
router.get('/:id', (req, res) => {
  res.send(`Get vendor with id ${req.params.id}`)
})

// POST /vendors/ — create new
router.post('/', (req, res) => {
  res.send('Create new vendor')
})

// PUT /vendors/:id — replace entirely
router.put('/:id', (req, res) => {
  res.send(`Replace vendor with id ${req.params.id}`)
})

// PATCH /vendors/:id — partial update
router.patch('/:id', (req, res) => {
  res.send(`Update vendor with id ${req.params.id}`)
})

// DELETE /vendors/:id — remove
router.delete('/:id', (req, res) => {
  res.send(`Delete vendor with id ${req.params.id}`)
})

module.exports = router
