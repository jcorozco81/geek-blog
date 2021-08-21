const User = require('./User');
const Blogs = require('./Blogs');

User.hasMany(Blogs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Blogs.belongsTo(User);

module.exports = { User, Blogs };
