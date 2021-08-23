const router = require('express').Router();
const userRoute = require('./userRoutes');
const blogsRoute = require('./blogsRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/blogs', blogsRoute);
router.use('/users', userRoute);
router.use('/comments', commentsRoutes);





module.exports = router;