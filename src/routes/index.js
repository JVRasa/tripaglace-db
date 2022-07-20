const userRouter = require('../routes/userRouter');
const parlourRouter = require('../routes/parlourRouter');
const flavourRouter = require('../routes/flavourRouter');

module.exports = (app) => {
    app.use('/users', userRouter);
    app.use('/parlours', parlourRouter);
    app.use('/flavours', flavourRouter);
};
