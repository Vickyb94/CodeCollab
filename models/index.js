const User = require('./User');
const Language = require('./Language');
const Post = require('./Post');

// associations 
User.hasMany(Post, {
  foreignKey: 'userId'
})

Post.belongsTo(User, {
  foreignKey: 'userId'
})

User.hasMany(Language, {
  foreignKey: 'userId'
})

Language.belongsToMany(User, {
  through: User
})



module.exports = { User, Language, Post };
