const { Blog } = require("../models");

const blogdata = [
  {
    user_id: 2,
    created_date: "2024-06-23",
    title: "Very Funny blog",
    content: "why is co-pilot not working????",
  },
  {
    user_id: 1,
    created_date: "2024-06-23",
    title: "Copilot",
    content: "why is co-pilot not working????",
  },
  {
    user_id: 3,
    created_date: "2024-06-23",
    title: "Github",
    content: "why is co-pilot not working????",
  },
];

const seedBlog = async () => await Blog.bulkCreate(blogdata);

module.exports = seedBlog;
