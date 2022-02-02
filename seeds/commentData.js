const { Comment } = require("../models");

const commentData = [
  {
    content: "Sounds Interesting. I'd love to test out the engine",
    user_id: 1,
    blog_id: 1,
    created_date: 23 / 06 / 21,
    id: 1,
  },
  {
    content: "Wow, I had no idea that there was a more defined version of Javascript",
    user_id: 1,
    blog_id: 2,
    created_date: 23 / 06 / 21,
    id: 3,
  },
  {
    content: "React-Native all the way!",
    user_id: 1,
    blog_id: 3,
    created_date: 23 / 06 / 21,
    id: 2,
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
