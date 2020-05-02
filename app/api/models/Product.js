const mongoose  = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description :{
        type: Text
    },
    image :{
        type: String
    },
    promo :{
        type: Boolean
    },
    promo_price :{
        type: Number
    },
    price :{
        type: Number
    },
    category :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    
},{
    timestamps:true,
    collection: product
})

module.exports = mongoose.model('Post',ProductSchema);