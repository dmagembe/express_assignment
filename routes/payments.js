const express = require('express')



const router = express.Router()


router.get('/', (req, res) => {
  res.send('All payments')
})

router.get('/:id', (req, res) => {
  res.send(`Get payment with id ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Create new payment')
})

router.put('/:id', (req, res) => {
  res.send(`Replace payment with id ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
  res.send(`Update payment with id ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`Delete payment with id ${req.params.id}`)
})

module.exports = router
