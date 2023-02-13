const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// import User for reference
const User = require('./User');

class Post extends Model {}

Post.init(
  {
    id:{
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
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
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