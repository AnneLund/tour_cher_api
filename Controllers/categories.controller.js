const CategoriesModel = require('../Models/categories.model.js')

class CategoriesController {
    constructor() {
        console.log('Instance call of CategoriesController')
    }

    list = async (req, res) => {
        const result = await CategoriesModel.findAll()
        res.json(result)
    };
    create = async (req, res) => {
        const {name} = req.body;

        if(name) {
            const model = await CategoriesModel.create(req.body)
            return res.json({newId: model.id})
        } else {
            res.sendStatus(418)
        }
    }
}

module.exports = {CategoriesController}