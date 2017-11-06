const 
  Posts = require('../mdoels/Post.js')

module.exports = {
  index: (req,res)=> {
    Posts.find({ "location": req.params.location}, (err, posts)=>{ 
      res.json(posts)
    })
  }
}