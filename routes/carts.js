const express = require('express')



const router = express.Router()



// GET /carts/ — list all
router.get('/', (req, res) => {
  res.send('All carts')
})

// GET /carts/:id — get one
router.get('/:id', (req, res) => {
  res.send(`Get cart with id ${req.params.id}`)
})

// POST /carts/ — create new
router.post('/', (req, res) => {
  res.send('Create new cart')
})

// PUT /carts/:id — replace entirely
router.put('/:id', (req, res) => {
  res.send(`Replace cart with id ${req.params.id}`)
})

// PATCH /carts/:id — partial update
router.patch('/:id', (req, res) => {
  res.send(`Update cart with id ${req.params.id}`)
})

// DELETE /carts/:id — remove
router.delete('/:id', (req, res) => {
  res.send(`Delete cart with id ${req.params.id}`)
})

module.exports = router
