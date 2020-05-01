const User = require('../models/User')
module.exports = {
    create: function(req, res, next) {
     
     User.create({ phone: 781506624, active: true }, function (err, result) {
         if (err) 
          next(err);
         else
          res.json({status: "success", message: "User added successfully!!!", data: null});
         
       });
    },
}