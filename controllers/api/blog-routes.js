const express = require("express");
const { Blog } = require("../../models");
const router = express.Router();

// API request to create a blog post

router.post("/blogs", (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const created_date = new Date(Date.now())
    Blog.create({ title, content, user_id: req.session.user.id, created_date}).then(
      (created) => {
        res.json(created);
      }
    ).catch(function (err) {
      res.status(500).json(err)
    });
  } catch (e) {
    res.status(500).json(e)
  }
 
});

// API request to delete a blog post

router.delete("/blogs/:id", (req, res) => {
  Blog.destroy({ where: { id: req.params.id } }).then((deleted) => {
    res.json({ data: "success" });
  }).catch(function (err) {
    res.status(500).json(err)
  });;
});

// API request to update a blog post

router.put("/blogs/:id", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  Blog.findByPk(req.params.id)
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

// router.put;

module.exports = router;
