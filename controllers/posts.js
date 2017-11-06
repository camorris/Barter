const 
  Posts = require('../models/Post.js')
  jwt = require('jsonwebtoken')
  dotenv = require('dotenv').load()

module.exports = {
  index: (req,res)=> {
    Posts.find({ "location": req.params.location }, (err, posts)=>{ 
      res.json(posts)
    
    })
  },

  show: (req,res)=> {
    Posts.findById(req.params.id, (err, post)=>{
      res.json(post)
    })
  },

  create: (req,res)=> {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded){
      if (err) return res.json({message: "invalid token"})
      newPost = new Posts(req.body)
      newPost.userId = decoded._id
      newPost.save((err, post)=>{
        res.json({success: true, message: "Post Created", post })
    })
    })

    // Posts.create(req.body, (err, post) => { 
    //   if (err) return res.json({success: false, message: "Missing Required Fields"})
    //   res.json({success: true, message: "Post Created", post })
    // })
  },

  update: (req, res)=>{
    Posts.findById(req.params.id, (err, post)=>{
      Object.assign(post, req.body)
      post.save((err, updatedPost) =>{
        res.json({success: true, message: "Post updated!", updatedPost})
      })
    })
  },

  destroy: (req, res)=>{
    // res.json({success: true, message: "You are in the delete request"})
    Posts.findByIdAndRemove(req.params.id, (err, post)=>{
      res.json({success: true, message:"Post TERMINATED 🤖", post})
    })
  }
}