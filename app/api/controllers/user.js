const User = require('../models/User');
const {otpProvider, jwt} = require('./../../../providers');

module.exports = {
    /* create: function(req, res, next) {
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
    }, */

    create: function(req, res){
        console.log(req.headers.issuer);
        try {
            if (req.headers.issuer !== process.env.OAUTH_SECRET) {
              res.status(401).send({
                message: 'invalid issuer.',
              });
              return;
            }
            const otp = otpProvider.generateOTP(req.query.phone);
            const token = jwt.sign({phone: req.query.phone});
            const exist = User.find({
              where: {
                phone: req.query.phone,
              },
            });
            if (exist && !exist.length) {
              User.create({
                active: false,
                phone: req.query.phone,
              })
                .then((user) => {
                  res.status(201).send({
                    success: true,
                    message: 'Successfully created.',
                    idUser: user.id,
                    token,
                  });
                })
                .catch((error) => res.status(400).send(error));
              return;
            }
            res.status(201).send({
              success: true,
              message: 'Successfully created.',
              idUser: exist[0].id,
              token,
            });
          } catch (error) {
            console.log(error);
            res.status(500).send(error);
      
          }
    },

    update: function(req, res){
        const {id, phone} = req.query;
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