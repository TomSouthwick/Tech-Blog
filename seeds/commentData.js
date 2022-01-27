const { Comment } = require("../models");

const commentData = [
  {
    content: "Blossoming Apricot",
    user_id: 1,
    blog_id: 2,
    created_date: "23/06/2024",
  },
  {
    content: "Sam has COVID19",
    user_id: 1,
    blog_id: 1,
    created_date: "23/06/2024",
  },
  {
    content: "Blossoming Hello",
    user_id: 1,
    blog_id: 3,
    created_date: "23/06/2024",
  },
];

// const seedComment = async () => await Comment.bulkCreate(commentData);

const seedComment = async () => {
  for (let index = 0; index < commentData.length; index++) {
    const comment = commentData[index];
    await Comment.create(comment);
  }
};

module.exports = seedComment;
