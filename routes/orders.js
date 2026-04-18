const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
  res.send('All orders')
})

router.get('/:id', (req, res) => {
  res.send(`Get order with id ${req.params.id}`)
})


router.post('/', (req, res) => {
  res.send('Create new order')
})


router.put('/:id', (req, res) => {
  res.send(`Replace order with id ${req.params.id}`)
})


router.patch('/:id', (req, res) => {
  res.send(`Update order with id ${req.params.id}`)
})


router.delete('/:id', (req, res) => {
  res.send(`Delete order with id ${req.params.id}`)
})

module.exports = router
