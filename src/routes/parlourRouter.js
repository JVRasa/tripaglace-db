const ParlourController = require('../controllers/parlourController');
const parlourRouter = require('express').Router();

parlourRouter.get('/', ParlourController.handleGetParlours);
parlourRouter.post('/', ParlourController.handlePost);
parlourRouter.get('/:id', ParlourController.handleGetOneParlour);
parlourRouter.get('/:id/reviews', ParlourController.handleGetOneParlourReviews);

module.exports = parlourRouter;
