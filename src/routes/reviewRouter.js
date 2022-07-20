const ReviewController = require('../controllers/reviewController');
const reviewRouter = require('express').Router();

reviewRouter.get('/', ReviewController.handleGetReviews);
reviewRouter.post('/', ReviewController.handlePost);
reviewRouter.get('/:id', ReviewController.handleGetOneReview);
reviewRouter.delete('/:id', ReviewController.handleDeleteOneReview);
reviewRouter.patch('/:id', ReviewController.handlePatchOneReview);

module.exports = reviewRouter;
