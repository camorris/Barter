const   
    mongoose = require('mongoose')
    bcrypt = require('bcrypt-nodejs')
    userSchema = new mongoose.Schema({
        name: {type: String, required:true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    })
//add a method to user to hash the password
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

//add a method to the user to check if a proivded password is correct
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

//middleware: before saving check if password was changed,
//and if so, encrypt new password before saving:
userSchema.pre('save', function(next){
    if(this.isModified('password')){
        this.password = this.generateHash(this.password)
    }
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User