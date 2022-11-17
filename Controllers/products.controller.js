const ProductsModel = require('../Models/products.model.js')
const CategoriesModel = require('../Models/categories.model.js')
// const RoleModel = require('../Models/role.model.js')

ProductsModel.belongsTo(CategoriesModel)
CategoriesModel.hasMany(ProductsModel)

class ProductsController {
    constructor() {
        console.log('Instance call of user controller')
    }

    list = async (req, res) => {
        const result = await ProductsModel.findAll({
attributes: [
    "id",
    "title",
    "description",
    "price",
    "category_id"
],
include: {
    model: CategoriesModel,
    attributes: ["id", "category", "description"],
},
        })
        res.json(result)
    };

    create = async(req, res) => {
        console.log(req.body)
        const {title, description, price, category_id} = req.body
        if (title && price) {
            const product = await ProductsModel.create(req.body)
            return res.json({newId: product.id})
        } else {
            console.log('Create failed')
            res.sendStatus(418);
        }
    }
}

module.exports = {ProductsController}