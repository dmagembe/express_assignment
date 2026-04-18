const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('All clients')
})

router.get('/:id', (req, res) => {
  res.send(`Get client with id ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Create new client')
})

router.put('/:id', (req, res) => {
  res.send(`Replace client with id ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
  res.send(`Update client with id ${req.params.id}`)
})


router.delete('/:id', (req, res) => {
  res.send(`Delete client with id ${req.params.id}`)
})

module.exports = router
