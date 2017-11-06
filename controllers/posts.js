const Posts = require('../mdoels/Post.js')

module.exports = {
  index: (req,res)=> {
    res.render('posts/index', {posts})
  }
}

  