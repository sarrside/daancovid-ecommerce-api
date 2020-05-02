const Category = require('../models/Category')
module.exports = {
    create: function(req, res, next) {
     const {name, description} = req.body;
     Category.create({
         name: name,
         description: description
     }).then(category=>{
         res.send({
             status: 'ok',
             code: 1,
             message: 'Category successfully created'
         });
     }).catch(err=>{
         res.send(err);
     })
    },

    update: function(req, res){
        const {_id, name, description} = req.body;
        Category.findById(_id, (err, category)=>{
            if (err) {
                return next(err);
            }else{
                category.update({
                    name: name || category.name,
                    description: description || category.description
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
        Category.findById(req.params.id, (err,data)=>{
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
        Category.find((err, categories)=>{
            if(err){
                return next(err);
            }else{
                res.send(categories);
            }
        })
    },
    get: function(req, res){
        Category.findById(req.params.id, (err, category)=>{
            if(err){
                return next(err);
            }else{
                res.send(category);
            }
        })
    }
}