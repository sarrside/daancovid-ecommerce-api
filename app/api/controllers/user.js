const User = require('../models/User');

module.exports = {
    create: function(req, res, next) {
     const {phone} = req.query;
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
        const {id, phone} = req.body;
        User.findById(id, (err, user)=>{
            if (err) {
                return next(err);
            }else{
                user.update({
                    phone: phone || user.phone
                }).then(()=>{
                    res.status(200).send({
                        success: true,
                        code:1,
                        message: 'user successfully updated',
                    })
                    .catch(err => {
                        res.send(err);
                    })
                })
            }
        })

    },

    delete: function(req, res){
        User.findByIdAndUpdate(req.body.id, (err,data)=>{
            if (err) {
                return next(err);
            }else{
                res.status(200).json({
                    msg: 'user succesfully deleted'
                })
            }
        })
    },
    getAll: function(req, res){
        User.find((err, users)=>{
            if(err){
                return next(err);
            }else{
                res.send(data);
            }
        })
    },
    get: function(req, res){
        User.findById(req.body.id, (err, user)=>{
            if(err){
                return next(err);
            }else{
                res.send(user);
            }
        })
    }
}