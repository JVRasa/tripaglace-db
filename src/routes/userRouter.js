const UserController = require('../controllers/userController');
const userRouter = require('express').Router();

userRouter.get('/', UserController.handleGetUsers);
userRouter.post('/', UserController.handlePost);
userRouter.get('/:id', UserController.handleGetOneUser);

module.exports = userRouter;
