const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class user extends Model {}

user.init(
  {
    userId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
    
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = user;