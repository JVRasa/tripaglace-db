const userRouter = require('../routes/userRouter');
const parlourRouter = require('../routes/parlourRouter');

module.exports = (app) => {
    app.use('/users', userRouter);
    app.use('/parlours', parlourRouter);
};
