const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('All products')
})

router.get('/:id', (req, res) => {
  res.send(`Get product with id ${req.params.id}`)
})

router.post('/', (req, res) => {
  
  res.send('Create new product')
})

router.put('/:id', (req, res) => {
  res.send(`Replace product with id ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
  res.send(`Update product with id ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  
  res.send(`Delete product with id ${req.params.id}`)
})

module.exports = router
