const
  express = require('express')
  usersRouter = new express.Router(),
  usersCtrl = require('../controllers/users.js'),
  verifyToken = require('../serverAuth.js').verifyToken
//

function matchUser(req, res, next){
  if(req.params.id == req.user._id){
    return next()
  }
  res.json({success: false, message:'You are not the right user!'})
}


usersRouter.route('/')
  .get(usersCtrl.index)
  .post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.route('/:id')
  .get(usersCtrl.show)
  .patch(verifyToken, matchUser, usersCtrl.update)
  .delete(verifyToken, matchUser, usersCtrl.destroy)

module.exports = usersRouter