const Parlour = require('../models/parlourModel');

async function handleGetParlours(req, res) {
    const { flavours } = req.query;
    try {
        res.send(await Parlour.findMany({ flavours }));
    } catch (err) {
        console.error(err);
        res.status(500).send('something wrong happened');
    }
}

async function handleGetOneParlour(req, res) {
    try {
        const parlour = await Parlour.findOne(req.params.id);
        if (parlour) res.send(parlour);
        else res.sendStatus(404);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function handleGetOneParlourReviews(req, res) {
    try {
        const reviews = await Parlour.findManyReviews(req.params.id);
        if (reviews) res.send(reviews);
        else res.sendStatus(404);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function handlePost(req, res) {
    try {
        const { shopname, address, zip, city } = req.body;
        const validationErrors = Parlour.validate({
            shopname,
            address,
            zip,
            city,
        });

        if (validationErrors) {
            return res.status(422).json({ errors: validationErrors.details });
        }
        res.status(201).send(
            await Parlour.create({ shopname, address, zip, city })
        );
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {
    handleGetParlours,
    handleGetOneParlour,
    handlePost,
    handleGetOneParlourReviews,
};
