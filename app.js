const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('./config/database');
const userController = require('./app/api/controllers/user');
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));

require('./routes')(app);

app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res){
 res.json({"tutorial" : "Build REST API with node.js"});
});


app.listen(process.env.PORT || 5000, function(){ console.log(`Node server listening on port ${process.env.PORT || 5000}`);});
