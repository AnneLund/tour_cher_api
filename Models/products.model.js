const {sequelize} = require('../Config/db.sequelize.js')
const DataTypes = require('sequelize')
const {Model} = require('sequelize')

class ProductsModel extends Model {}

ProductsModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    description: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
    price: {
    type:  DataTypes.INTEGER,
    allowNull: false,   
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2,
    },
},
{
    sequelize,
    modelName: 'products',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
}
)

module.exports = ProductsModel;