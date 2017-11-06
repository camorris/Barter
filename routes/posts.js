const 
  express = require('express'),
  postRouter = express.Router(),
  postsCtrl = require('../controllers/posts.js')
  verifyToken = require('../serverAuth.js').verifyToken



postRouter.route('/:location') 
  .get(postsCtrl.index)
  .post(verifyToken, postsCtrl.create)

postRouter.route('/:location/:id')
  .get(postsCtrl.show)
  .patch(verifyToken, postsCtrl.update)
  .delete(verifyToken, postsCtrl.destroy)



module.exports = postRouter