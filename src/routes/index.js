const userRouter = require('../routes/userRouter');
const parlourRouter = require('../routes/parlourRouter');
const flavourRouter = require('../routes/flavourRouter');
const menuRouter = require('../routes/menuRouter');

module.exports = (app) => {
    app.use('/users', userRouter);
    app.use('/parlours', parlourRouter);
    app.use('/flavours', flavourRouter);
    app.use('/menu', menuRouter);
};
