const {sequelize} = require('../Config/db.sequelize.js')
const DataTypes = require('sequelize')
const {Model} = require('sequelize')

class CarsModel extends Model {}

CarsModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    description: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    color: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    horsepower: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    production_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fuel_type: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    doors: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    geartype: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   acceleration: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    measurements: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'cars',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
}
)

module.exports = CarsModel;