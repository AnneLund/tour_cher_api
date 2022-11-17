const express = require('express')
const {ProductsController} = require('../Controllers/products.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new ProductsController()

const ProductsRouter = express.Router()

ProductsRouter.get('/products', (req, res) => {
    controller.list(req, res)
})

ProductsRouter.post('/products', (req, res) => {
    controller.create(req, res)
})

module.exports = {ProductsRouter}