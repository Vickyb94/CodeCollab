const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Languages extends Model {}

Languages.init(
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
    modelName:`Languages`,
  }
);

module.exports = Languages;