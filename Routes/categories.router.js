const express = require('express')
const {CategoriesController} = require('../Controllers/categories.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')

const controller = new CategoriesController();
const CategoriesRouter = express.Router()

CategoriesRouter.get('/categories', (req, res) => {
    controller.list(req, res)
})

CategoriesRouter.post('/categories', (req, res) => {
    controller.create(req, res)
})

module.exports = {CategoriesRouter}