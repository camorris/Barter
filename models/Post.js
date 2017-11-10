const
    mongoose = require('mongoose')
    postSchema = new mongoose.Schema({
			title: {type: String, required: true},
			body: {type: String},
			item: {type: String, required: true},
			exchangeFor: {type: String, required: true},
			location: {type: String, required: true},
			userId: {type: String, required: true},
			image: {type: String, required: true},
			cashValue: {type: Number}
    })
//

const Post = mongoose.model('Post', postSchema)
module.exports = Post