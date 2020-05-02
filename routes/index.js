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
}