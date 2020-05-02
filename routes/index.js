const {
    UserController,
    CartController,
    CategoryController,
    OrderController,
    OtpsController,
    PaymentController,
    ProductController,
    UserInfoController,
} = require('./../app/api/controllers')

module.exports = (app) => {
    //USER ROUTES
    app.post('/user', UserController.create);
    app.get('/users', UserController.getAll);
    app.get('/user/:id', UserController.get);
    app.put('/user', UserController.update);
    app.delete('/user/:id', UserController.delete);

    //Category Routes
    app.post('/category', CategoryController.create);
    app.get('/categories', CategoryController.getAll);
    app.get('/category/:id', CategoryController.get);
    app.put('/category', CategoryController.update);
    app.delete('/category/:id', CategoryController.delete);

    //Order Routes
    app.post('/order', OrderController.create);
    app.get('/orders', OrderController.getAll);
    app.get('/order/:id', OrderController.get);
    app.put('/order', OrderController.update);
    app.delete('/order/:id', OrderController.delete);
}