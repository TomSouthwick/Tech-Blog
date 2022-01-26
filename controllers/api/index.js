const router = require("express").Router();
const blogRoutes = require("./blog-routes");
const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use(blogRoutes);
router.use(commentRoutes);

module.exports = router;
