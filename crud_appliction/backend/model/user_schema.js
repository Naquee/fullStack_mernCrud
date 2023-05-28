const mongoose = require("mongoose")
// const autoIncrement  = require("mongoose-auto-increment");

const userSchema= new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:Number
})

// userSchema.plugin(autoIncrement.plugin, 'user');


const User = mongoose.model("user", userSchema)

module.exports = {User}