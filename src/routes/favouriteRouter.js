const FavouriteController = require('../controllers/favouriteController');
const favouriteRouter = require('express').Router();

favouriteRouter.get('/', FavouriteController.handleGetFavourites);
favouriteRouter.post('/', FavouriteController.handlePost);
favouriteRouter.get('/:id', FavouriteController.handleGetOneFavourite);

module.exports = favouriteRouter;
