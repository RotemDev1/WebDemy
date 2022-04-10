const express = require('express')
const router = express.Router()
const { payCourses, getCarts } = require('./cart.controller')

router.get('/carts', getCarts)
router.post('/pay', payCourses)



module.exports = router;
