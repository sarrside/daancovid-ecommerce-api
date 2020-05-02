const User = require('../models/User')
const UserInfo = require('../models/UserInfo');
module.exports = {
    create: function(req, res, next) {
     const {phone} = req.body;
     User.create({
         phone: phone,
         active: true
     }).then(user=>{
         res.send({
             status: 'ok',
             code: 1,
             message: 'User successfully created'
         });
     }).catch(err=>{
         res.send(err);
     })
    },

    update: function(req, res){

    },

    delete: function(req, res){
        
    },
    getAll: function(req, res){
        
    },
    update: function(req, res){
        
    }
}