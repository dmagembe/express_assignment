const express = require('express')



const router = express.Router()


// GET /payments/ — list all
router.get('/', (req, res) => {
  res.send('All payments')
})

// GET /payments/:id — get one
router.get('/:id', (req, res) => {
  res.send(`Get payment with id ${req.params.id}`)
})

// POST /payments/ — create new
router.post('/', (req, res) => {
  res.send('Create new payment')
})

// PUT /payments/:id — replace entirely
router.put('/:id', (req, res) => {
  res.send(`Replace payment with id ${req.params.id}`)
})

// PATCH /payments/:id — partial update
router.patch('/:id', (req, res) => {
  res.send(`Update payment with id ${req.params.id}`)
})

// DELETE /payments/:id — remove
router.delete('/:id', (req, res) => {
  res.send(`Delete payment with id ${req.params.id}`)
})

module.exports = router
