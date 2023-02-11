const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
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
    modelName: 'Post'
  }
);

module.exports = Post;