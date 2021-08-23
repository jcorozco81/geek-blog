const sequelize = require('../config/connection');
const { User, Blogs, Comments} = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blogs.bulkCreate(blogData);

  await Comments.bulkCreate(commentData);


  process.exit(0);
};

seedDatabase();
