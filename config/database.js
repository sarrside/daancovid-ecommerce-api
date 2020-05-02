//Set up mongoose connection
require('dotenv/config')
const mongoose = require('mongoose');
const mongoDB = process.env.URL;
const mongoLocal = 'mongodb://localhost:27017/daancovid-ecommerce';
mongoose.connect(mongoDB, {useNewUrlParser: true},
    ()=>{
        console.log('Database connected');
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;