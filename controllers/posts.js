const 
  Posts = require('../models/Post.js')

module.exports = {
  index: (req,res)=> {
    // Posts.find({ "location": req.params.location}, (err, posts)=>{ 
    //   res.json(posts)
    // })
    Posts.find({}, (err,posts)=> {res.json(posts)})
  }
}