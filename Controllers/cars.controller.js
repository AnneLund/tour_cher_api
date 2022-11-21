const CarsModel = require('../Models/cars.model.js')
const CategoriesModel = require('../Models/categories.model.js')
const BrandsModel = require('../Models/brands.model.js')
// const RoleModel = require('../Models/role.model.js')

CarsModel.belongsTo(BrandsModel)
BrandsModel.hasMany(CarsModel)

CarsModel.belongsToMany(CategoriesModel, {through: 'junction'})
CategoriesModel.belongsToMany(CarsModel, {through: 'junction'})
BrandsModel.belongsToMany(CarsModel, {through: 'junction'})

class CarsController {
    constructor() {
        console.log('Instance call of user controller')
    }

    list = async (req, res) => {
        const result = await CarsModel.findAll({
            // where: {id: 1},
            include: [{
                model: CategoriesModel,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            },
            {
                model: BrandsModel,
                attributes: ['name'],
            }],
            
        })
        res.json(result)
    };

    create = async(req, res) => {
        console.log(req.body)
        const {name, description, price, horsepower, production_year, fuel_type, doors, seats, geartype, weight, acceleration, measurements, available, category_id} = req.body
        //&& description && price && horsepower && production_year && fuel_type && doors && seats && geartype && weight && acceleration && measurements && available && category_id
        if (name && description && price && horsepower && production_year && fuel_type && doors && seats && geartype && weight && acceleration && measurements && available && category_id) {
            const car = await CarsModel.create(req.body)
            return res.json({newId: car.id})
        } else {
            console.log('Create failed')
            res.sendStatus(418);
        }
    }
}

module.exports = {CarsController}