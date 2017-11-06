const 
  express = require('express'),
  postRouter = express.Router(),
  postsCtrl = require('../controllers/posts.js')


postRouter.route('/:location') 
  .get(postsCtrl.index)
  .post(postsCtrl.create)

postRouter.route('/:location/:id')
  .get(postsCtrl.show)
  .patch(postsCtrl.update)
//   .delete(postsCtrl.destroy)



module.exports = postRouter