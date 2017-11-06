const 
  express = require('express'),
  postRouter = express.Router({mergerParams: true}),
  postsCtrl = require('../controllers/posts.js')

postRouter.get('/new', postsCtrl.new)

residentRouter.route('/')
  .post(postsCtrl.create)

module.exports = postRotuer