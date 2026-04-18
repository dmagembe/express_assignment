const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
  res.send('All carts')
})

router.get('/:id', (req, res) => {
  res.send(`Get cart with id ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Create new cart')
})

router.put('/:id', (req, res) => {
  res.send(`Replace cart with id ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
  res.send(`Update cart with id ${req.params.id}`)
})


router.delete('/:id', (req, res) => {
  res.send(`Delete cart with id ${req.params.id}`)
})

module.exports = router
