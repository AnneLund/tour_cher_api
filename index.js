const express = require('express')
const app = express()
const PORT = process.env.PORT || 3123

const {UserRouter} = require('./Routes/user.router.js')
const {initRouter} = require('./Routes/init.sequelize.router.js')
const {AuthRouter} = require('./Routes/auth.router.js')
const {RoleRouter} = require('./Routes/role.router.js')
const {CarsRouter} = require('./Routes/cars.router.js')
const {BrandsRouter} = require('./Routes/brands.router.js')
const {CategoriesRouter} = require('./Routes/categories.router.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader("Acces-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    )
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Accept, Accept-Language, X-Authorization, X-Requested-With"
    )
    res.setHeader("Access-Control-Allow-Credentials", true)

    next()
})

app.use(express.json({limit: "1mb"}))

app.use(UserRouter)
app.use(initRouter)
app.use(AuthRouter)
app.use(RoleRouter)
app.use(CarsRouter)
app.use(BrandsRouter)
app.use(CategoriesRouter)

app.listen(PORT, () => {
    console.log(`Kører på port ${PORT}`)
})

module.exports = {app}