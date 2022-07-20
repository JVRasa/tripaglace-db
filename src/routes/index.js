const userRouter = require('../routes/userRouter');

module.exports = (app) => {
    app.use('/users', userRouter);
};
