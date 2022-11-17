const express = require('express')
const {UserController} = require('../Controllers/user.controller.js')
const {verifyToken} = require('../Middleware/verifyToken.js')
const Controller = new UserController();
const UserRouter = express.Router()

UserRouter.get('/users', verifyToken, (req, res) => {
    Controller.list(req, res)
})

UserRouter.post('/users', (req, res) => {
    Controller.create(req, res)
})

module.exports = {UserRouter}