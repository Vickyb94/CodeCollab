
const sequelize = require('../config/connection');

// import seeder functions
const seedPosts = require('../seeds/seedPosts');
const seedLanguages = require('../seeds/seedLanguages');
const seedUsers = require('../seeds/seedUsers');

// run all seeds function
const seed = async () => {
  await sequelize.sync({ force: true});
  
  await seedUsers();
  
  await seedPosts();
  
  await seedLanguages();
  
  console.log('Database seeded!');
  process.exit(0);
}

// run the function to seed all data
seed();

