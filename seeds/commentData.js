const { Comment } = require("../models");

const commentData = [
  {
    content: "Blossoming Apricot",
    user_id: 1,
    blog_id: 2,
  },
  {
    content: "Sam has COVID19",
    user_id: 1,
    blog_id: 1,
  },
  {
    content: "Blossoming Hello",
    user_id: 1,
    blog_id: 3,
  },
];

const seedComments = async () => await Comment.bulkCreate(commentData);

module.exports = seedComments;
