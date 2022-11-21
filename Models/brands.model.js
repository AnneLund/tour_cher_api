const {sequelize} = require('../Config/db.sequelize.js')
const DataTypes = require('sequelize')
const {Model} = require('sequelize')

class BrandsModel extends Model {}
BrandsModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false,
    }
},
{
    sequelize,
    modelName: 'brands',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
}
)

module.exports = BrandsModel;