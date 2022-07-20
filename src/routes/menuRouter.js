const MenuController = require('../controllers/menuController');
const menuRouter = require('express').Router();

menuRouter.get('/', MenuController.handleGetMenu);
menuRouter.get('/:id', MenuController.handleGetOneMenu);

module.exports = menuRouter;
