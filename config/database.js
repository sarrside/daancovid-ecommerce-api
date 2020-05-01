//Set up mongoose connection
require('dotenv/config')
const mongoose = require('mongoose');
const mongoDB = process.env.URL;
mongoose.connect(mongoDB, {useNewUrlParser: true},
    ()=>{
        console.log('Database connected');
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;