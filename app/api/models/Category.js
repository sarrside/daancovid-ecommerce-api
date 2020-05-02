const mongoose  = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description :{
        type: String
    },
    
},{
    timestamps:true,
    //collection: category,
})

module.exports = mongoose.model('Post',CategorySchema);