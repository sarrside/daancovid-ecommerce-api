const mongoose  = require('mongoose');
const CartSchema = new mongoose.Schema({
    quantity:{
        type:Number,
        required: true
    },
    amount :{
        type: String
    },
    price :{
        type: Number
    },
    
},{
    timestamps:true,
    collection: cart,
})

module.exports = mongoose.model('Post',CartSchema);