const FlavourController = require('../controllers/flavourController');
const flavourRouter = require('express').Router();

flavourRouter.get('/', FlavourController.handleGetFlavours);
flavourRouter.get('/:id', FlavourController.handleGetOneFlavor);

module.exports = flavourRouter;
