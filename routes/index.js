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

    app.post('/user', UserController.create);
}