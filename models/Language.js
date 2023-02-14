const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// import User for reference
const User = require('./User');

class Language extends Model {}

Language.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Javascript: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    Python: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    Java: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    Swift: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName:`Language`,
  }
);

module.exports = Language;