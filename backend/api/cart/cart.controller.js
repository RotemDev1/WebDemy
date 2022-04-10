const cartService = require('./cart.service')

async function payCourses(req, res) {
    try {
        const payCart = req.body
        const saveCart = await cartService.payCourses(payCart);
        res.send(saveCart);

    } catch (err) {
        res.status(500).send({ err: 'Failed to pay cart' })
    }
}

async function getCarts(req, res) {
    try {
        const carts = await cartService.queryCarts()
        res.send(carts)
    } catch {
        res.status(500).send({ err: 'Failed to get carts' })
    }
}

module.exports = {
    payCourses,
    getCarts
}