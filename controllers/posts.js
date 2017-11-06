const 
  Posts = require('../models/Post.js')

module.exports = {
  index: (req,res)=> {
    Posts.find({ /*"location": req.params.location */}, (err, posts)=>{ 
      res.json(posts)
    
    })
  },

  show: (req,res)=> {
    Posts.findById(req.params.id, (err, post)=>{
      res.json(post)
    })
  },

  create: (req,res)=> {
    Posts.create(req.body, (err, post) => { 
      if (err) return res.json({success: false, message: "Missing Required Fields"})
      res.json({success: true, message: "Post Created", post })
    })
  },
  update: (req, res)=>{
    res.json({message:"The patch request was recieved"})
    Posts.findByIdAndUpdate(req.params.id, (err, post)=>{
      Object.assign(post, req.body)
        post.save((err, updatedPost) =>{
          res.json({success: true, message: "Post updated!"})
        })
    } )
  }
}