const {sequelize} = require('../Config/db.sequelize.js')
const DataTypes = require('sequelize')
const {Model} = require('sequelize')

class ConditionsModel extends Model {}

ConditionsModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    value: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'conditions',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
}
)

module.exports = ConditionsModel;