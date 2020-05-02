const mongoose  = require('mongoose');
const OTPsSchema = new mongoose.Schema({
    associatedPhoneNumber:{
        type:String,
        required: true
    },
    code :{
        type: Number
    },
    
},{
    timestamps:true,
    //collection: OTPs
    
})

module.exports = mongoose.model('OTPs',OTPsSchema);