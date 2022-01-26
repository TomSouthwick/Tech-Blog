const { User } = require("../models");

const userData = [
  {
    username: "Tom",
    email: "tom@email.com",
    password: "SpiceLung",
  },
  {
    username: "Sam",
    email: "sam@email.com",
    password: "Omricon",
  },
  {
    username: "Mark Mcgowan",
    email: "Mark@email.com",
    password: "NoCovidHere",
  },
];

const seedUser = async () => {
  for (let index = 0; index < userData.length; index++) {
    const user = userData[index];
    await User.create(user);
  }
  // User.bulkCreate(userData);
};

module.exports = seedUser;
