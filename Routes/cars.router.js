const express = require('express')
const {CarsController} = require('../Controllers/cars.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new CarsController()

const CarsRouter = express.Router()

CarsRouter.get('/cars', (req, res) => {
    controller.list(req, res)
})

CarsRouter.post('/cars', (req, res) => {
    controller.create(req, res)
})

module.exports = {CarsRouter}