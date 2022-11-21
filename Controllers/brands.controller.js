const BrandsModel = require('../Models/brands.model.js')

class BrandsController {
    constructor() {
        console.log('Instance call of roleController')
    }

    list = async (req, res) => {
        const result = await BrandsModel.findAll()
        res.json(result)
    };
    create = async (req, res) => {
        const {name} = req.body;

        if(name) {
            const brand = await BrandsModel.create(req.body)
            return res.json({newId: brand.id})
        } else {
            res.send(418)
        }
    }
}

module.exports = {BrandsController}