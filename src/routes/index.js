const userRouter = require('../routes/userRouter');
const parlourRouter = require('../routes/parlourRouter');
const flavourRouter = require('../routes/flavourRouter');
const menuRouter = require('../routes/menuRouter');
const favouriteRouter = require('../routes/favouriteRouter');
const reviewRouter = require('../routes/reviewRouter');

module.exports = (app) => {
    app.use('/users', userRouter);
    app.use('/parlours', parlourRouter);
    app.use('/flavours', flavourRouter);
    app.use('/menu', menuRouter);
    app.use('/favourites', favouriteRouter);
    app.use('/reviews', reviewRouter);
};
