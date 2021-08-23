const router = require('express').Router();
const { User, Comments, Blogs } = require("../../models");


router.get('/', async (req, res) => {
    try {
        const blogData = await Blogs.findAll(
            {
                include: [{ model: User }, { model: Comments }],
                // attributes: { exclude: ["time_id", "service_id"] },
              }

        );



        res.status(200).json(blogData);
      } catch (err) {
        res.status(500).json(err);
      }
    });





    



module.exports = router;