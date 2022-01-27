const router = require("express").Router();
const moment = require("moment");
const { Blog, Comment, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all galleries for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          attributes: ["content", "user_id"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
// Use the custom middleware before allowing the user to access the blog
router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            // "created_date",
            "createdAt",
            // "timestamps",
            "content",
            // "description",
            "user_id",
            "blog_id",
          ],
          include: [
            {
              model: User,
              attributes: ["id", "username"],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    const blog = dbBlogData.get({ plain: true });

    blog.comments.forEach((comment) => {
      comment.createdAt = moment(comment.createdAt).fromNow();
    });
    res.render("blog", { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blog/:id/edit", withAuth, async (req, res) => {

  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            // "created_date",
            "createdAt",
            // "timestamps",
            "content",
            // "description",
            "user_id",
            "blog_id",
          ],
          include: [
            {
              model: User,
              attributes: ["id", "username"],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    const blog = dbBlogData.get({ plain: true });

    if(req.session.user.id !== dbBlogData.user_id) {
      res.redirect(`/blog/${req.params.id}`)
    }


    blog.comments.forEach((comment) => {
      comment.createdAt = moment(comment.createdAt).fromNow();
    });
    res.render("blog-edit", { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/create", withAuth, async (req, res) => {
  console.log(req, res)
  res.render("blog-create", {loggedIn: req.session.loggedIn});

  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          attributes: ["content", "user_id", "created_at"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    }).catch(function (err) {
      res.status(500).json(err);
    });
    console.log(req.session.user.id);

    const blogs = dbBlogData
      .map((blog) => blog.get({ plain: true }))
      .filter((blog) => blog.user_id === req.session.user.id);

    res.render("dashboard", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
