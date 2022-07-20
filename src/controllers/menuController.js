const Menu = require('../models/menuModel');

async function handleGetMenu(req, res) {
    try {
        res.send(await Menu.findMany());
    } catch (err) {
        console.error(err);
        res.status(500).send('something wrong happened');
    }
}

async function handleGetOneMenu(req, res) {
    try {
        const menu = await Menu.findOne(req.params.id);
        if (menu) res.send(menu);
        else res.sendStatus(404);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {
    handleGetMenu,
    handleGetOneMenu,
};
