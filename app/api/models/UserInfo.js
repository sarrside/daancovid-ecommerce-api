const mongoose  = require('mongoose');
const UserInfoSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required: '{PATH} is required!'
    },
    last_name :{
        type: String
    },
    adresse :{
        type: String
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true,
    //collection: user_info
})

module.exports = mongoose.model('Post',UserInfoSchema);