const User = require('../models/User');

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
        User.findById(req.params.id, (err,data)=>{
            if (err) {
                return next(err);
            }else{
                data.delete((err, result)=>{
                    if (err) {
                        throw err;
                    }else{
                        res.send({
                            msg: 'Succesfully removed'
                        })
                    }
                })
            }
        })
    },
    getAll: function(req, res){
        User.find((err, users)=>{
            if(err){
                return next(err);
            }else{
                res.send(users);
            }
        })
    },
    get: function(req, res){
        User.findById(req.params.id, (err, user)=>{
            if(err){
                return next(err);
            }else{
                res.send(user);
            }
        })
    }
}
//apidoc -i controller/ -o public/apidoc/