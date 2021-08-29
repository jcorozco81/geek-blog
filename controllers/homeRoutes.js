const router = require("express").Router();
const { User, Comments, Blogs } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [{ model: User }, { model: Comments }],
      // attributes: { exclude: ["time_id", "service_id"] },
    });

    const blogList = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogList);
    console.log(req.session.logged_in);

    res.render("homepage", { blogList, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const getBlog = await Blogs.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comments, include: [{ model: User }] }],
    });
    const blog = getBlog.get({ plain: true });
    const comms = blog.comments;
console.log(req.session.user_id);
    res.render("blog", { ...blog, comms, logged_in: req.session.logged_in, user_id: req.session.user_id});
  } catch (err) {
    res.status(400).json(err);
    
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const getBlog = await Blogs.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comments, include: [{ model: User }] }],
    });
    const blog = getBlog.get({ plain: true });
    const comms = blog.comments;
    console.log(blog);
    if (blog.user_id===req.session.user_id){
console.log("Authorized");
 
    res.render("edit", { ...blog, comms, logged_in: req.session.logged_in, user_id: req.session.user_id, blog_id: req.params.id});
  }
else{
  res.json(`Error: Not Authorized`);

}

} catch (err) {
    res.status(400).json(err);
    
  }
});




router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findAll({ where: {user_id: req.session.user_id},
      // req.session.user_id
      include: [{ model: User }, { model: Comments }],
      // attributes: { exclude: ["time_id", "service_id"] },
    });
    const blogList = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogList);
    // res.status(200).json(blogList);
    res.render("dashboard", { blogList, logged_in: req.session.logged_in, user_id: req.session.user_id});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
 

    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/register", async (req, res) => {
  try {
 

    res.render("register");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
