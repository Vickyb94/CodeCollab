const sequelize = require('../config/connection');
const { user, post, languages } = require('../models');

const languagesSeedData = require('./languagesSeedData.json');
const userSeedData = require('./userSeedData.json');
const postSeedData = require(`./postSeedData.json`);
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
  });
}
