const router = require('express').Router();
const { User, Comments, Blogs } = require("../../models");
const withAuth = require("../../utils/auth");



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

    router.post('/', withAuth, async (req, res) => {
      try {
          const blogData = await Blogs.create(req.body);  
  
      
          res.status(200).json(blogData);
  
        } catch (err) {
          res.status(400).json(err);
        }
      });

      router.delete('/:id', withAuth, async (req, res) => {
        try {
          const blogData = await Blogs.destroy({
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          });
      
          if (!blogData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
          }
      
          res.status(200).json(blogData);
        } catch (err) {
          res.status(500).json(err);
        }
      });

    



module.exports = router;