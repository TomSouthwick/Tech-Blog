const express = require("express");
const { Comment } = require("../../models");
const router = express.Router();

// API request to create a Comment post

router.post("/comments", (req, res) => {
  const content = req.body.content;
  const blog_id = req.body.blog_id;
  const created_date = new Date(Date.now())
  console.log(req.session, req.session.user)
 
  Comment.create({ content, created_date, blog_id, user_id: req.session.user.id }).then(
    (created) => {
      res.json(created);
    }
  ).catch(function (err) {
    res.status(500).json(err)
  });;
});

// API request to delete a Comment post

router.delete("/comments/:id", (req, res) => {
  Comment.destroy({ where: { id: req.params.id } }).then((deleted) => {
    res.json({ data: "success" });
  }).catch(function (err) {
    res.status(500).json(err)
  });;
});

// API request to update a Comment post

router.put("/comments/:id", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  Comment.findByPk(req.params.id)
    .then((found) => {
      found.title = title;
      found.content = content;
      return found.save();
    })
    .then(() => {
      res.json({ data: "success" });
    }).catch(function (err) {
      res.status(500).json(err)
    });;
});

module.exports = router;
