const mongoose  = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    payment_currency:{
        type:String,
        required: true
    },
},{
    timestamps:true,
    //collection: payment,
})

module.exports = mongoose.model('payment',PaymentSchema);