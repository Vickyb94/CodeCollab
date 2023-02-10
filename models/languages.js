const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class languages extends Model {}

languages.init(
  {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'userId',
        },
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
    underscored: true,
    modelName:`languages`,
  }
);

module.exports = languages;