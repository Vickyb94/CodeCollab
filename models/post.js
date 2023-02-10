const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class post extends Model {}

post.init(
  {
    postId:{
        type:DataTypes.INTEGER,
        allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
     imageLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    postUser_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'userId',
        },
      },
    
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = post;