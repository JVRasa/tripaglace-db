const Flavour = require('../models/flavourModel');

async function handleGetFlavours(req, res) {
    try {
        res.send(await Flavour.findMany());
    } catch (err) {
        console.error(err);
        res.status(500).send('something wrong happened');
    }
}

async function handleGetOneFlavour(req, res) {
    try {
        const flavour = await Flavour.findOne(req.params.id);
        if (flavour) res.send(flavour);
        else res.sendStatus(404);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {
    handleGetFlavours,
    handleGetOneFlavour,
};
