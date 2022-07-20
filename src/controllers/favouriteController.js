const Favourite = require('../models/favouriteModel');

async function handleGetFavourites(req, res) {
    try {
        res.send(await Favourite.findMany());
    } catch (err) {
        console.error(err);
        res.status(500).send('something wrong happened');
    }
}

async function handleGetOneFavourite(req, res) {
    try {
        const favorite = await Favourite.findOne(req.params.id);
        if (favorite) res.send(favorite);
        else res.sendStatus(404);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function handlePost(req, res) {
    try {
        const { user_id, parlour_id } = req.body;
        const validationErrors = Favourite.validate({
            user_id,
            parlour_id,
        });

        if (validationErrors) {
            return res.status(422).json({ errors: validationErrors.details });
        }
        res.status(201).send(await Favourite.create({ user_id, parlour_id }));
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {
    handleGetFavourites,
    handleGetOneFavourite,
    handlePost,
};
