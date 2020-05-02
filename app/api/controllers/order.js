const User = require('../models/User');
const Order = require('../models/Order');

module.exports = {
    create: function(req, res, next) {
     const {userId} = req.query;
     let order_num;
     Order.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function(err, post) {
        Order.create({
            total_amount: 0,
            order_num: parseInt(post.order_num)+1,
            user: userId
        }).then(order=>{
            res.send({
                status: 'ok',
                code: 1,
                message: 'User successfully created'
            });
        }).catch(err=>{
            res.send(err);
        })
      });

     
    },

    update: function(req, res){
        const {_id, total_amount} = req.query;
        Order.findById(_id, (err, order)=>{
            if (err) {
                return next(err);
            }else{
                order.update({
                    total_amount: total_amount || order.total_amount
                }).then(()=>{
                    res.status(200).send({
                        success: true,
                        code:1,
                        message: 'category successfully updated',
                    })
                    .catch(err => {
                        res.send(err);
                    })
                })
            }
        })
    },

    delete: function(req, res){
        Order.findById(req.params.id, (err,data)=>{
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
        Order.find((err, orders)=>{
            if(err){
                return next(err);
            }else{
                res.send(orders);
            }
        })
    },
    get: function(req, res){
        Order.findById(req.params.id, (err, order)=>{
            if(err){
                return next(err);
            }else{
                res.send(order);
            }
        })
    },
    
}