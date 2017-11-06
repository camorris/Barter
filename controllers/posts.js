const 
  Posts = require('../models/Post.js')

module.exports = {
  index: (req,res)=> {
<<<<<<< HEAD
    // Posts.find({ "location": req.params.location}, (err, posts)=>{ 
    //   res.json(posts)
    // })
    Posts.find({}, (err,posts)=> {
=======
    Posts.find({ "location": req.params.location}, (err, posts)=>{ 
>>>>>>> aacad4badec422990d2831dd8a1b5e637209768c
      res.json(posts)
    
    })
  },

  show: (req,res)=> {
    Posts.findById(req.params.id, (err, post)=>{
      res.json(post)
    })
  },
  create: (req,res)=> {
    Posts.create(req.body, (err, post)=> { 
      if (err) return res.json({success: false, message: "Missing Required Fields"})
      res.json({success: true, message: "Post Created", post })
    })
  }
}