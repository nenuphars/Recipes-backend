const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    recipes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Recipes"
    },
    favorites: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Recipes"
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User