const sequelize = require("../config/connection");
const seedBlog = require("./blogData");
const seedComment = require("./commentData");
const seedUser = require("./userData");
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  await seedComment();

  process.exit(0);
};

seedAll();
