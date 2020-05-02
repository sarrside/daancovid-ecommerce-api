const mongoose  = require('mongoose');
const OrderSchema = new mongoose.Schema({
    total_amount:{
        type:Number,
        required: true
    },
    order_num :{
        type: Number
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true,
    //collection: order
});

module.exports = mongoose.model('order',OrderSchema);