const router = require("express").Router();
const { User, Comments, Blogs } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [{ model: User }, { model: Comments }],
      // attributes: { exclude: ["time_id", "service_id"] },
    });

    const blogList = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogList);

    res.render("homepage", { blogList });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const getBlog = await Blogs.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comments, include: [{ model: User }] }],
    });
    const blog = getBlog.get({ plain: true });
    const comms = blog.comments;
console.log(comms);
    res.render("blog", { ...blog, comms });
  } catch (err) {
    res.status(400).json(err);
    
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [{ model: User }, { model: Comments }],
      // attributes: { exclude: ["time_id", "service_id"] },
    });
    const blogs = blogData.get({ plain: true });
    console.log(blogs);

    res.render("dashboard", { ...blogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
