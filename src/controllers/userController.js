const User = require('../models/userModel');

async function handleGetUsers(req, res) {
    try {
        res.send(await User.findMany());
    } catch (err) {
        console.error(err);
        res.status(500).send('something wrong happened');
    }
}

async function handleGetOneUser(req, res) {
    try {
        const user = await User.findOne(req.params.id);
        if (user) res.send(user);
        else res.sendStatus(404);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function handlePost(req, res) {
    try {
        const { username, email, password } = req.body;
        const validationErrors = User.validate({ username, email, password });

        if (validationErrors) {
            return res.status(422).json({ errors: validationErrors.details });
        }
        res.status(201).send(await User.create({ username, email, password }));
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {
    handleGetUsers,
    handleGetOneUser,
    handlePost,
};
