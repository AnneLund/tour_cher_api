const express = require('express')
const {BrandsController} = require('../Controllers/brands.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new BrandsController()

const BrandsRouter = express.Router()

BrandsRouter.get('/brands', (req, res) => {
    controller.list(req, res)
})

BrandsRouter.post('/brands', (req, res) => {
    controller.create(req, res)
})

module.exports = {BrandsRouter}