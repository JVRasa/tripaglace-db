const Review = require('../models/reviewModel');

async function handleGetReviews(req, res) {
    try {
        res.send(await Review.findMany());
    } catch (err) {
        console.error(err);
        res.status(500).send('something wrong happened');
    }
}

async function handleGetOneReview(req, res) {
    try {
        const review = await Review.findOne(req.params.id);
        if (review) res.send(review);
        else res.sendStatus(404);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function handlePost(req, res) {
    try {
        const { message, user_id, parlour_id } = req.body;
        const validationErrors = Review.validate({
            message,
            user_id,
            parlour_id,
        });

        if (validationErrors) {
            return res.status(422).json({ errors: validationErrors.details });
        }
        res.status(201).send(
            await Review.create({ message, user_id, parlour_id })
        );
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function handleDeleteOneReview(req, res) {
    try {
        const affectedRows = await Review.deleteOne(req.params.id);
        if (affectedRows == 0) res.sendStatus(404);
        else res.status(204).send('deleted');
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function handlePatchOneReview(req, res) {
    try {
        const { message, user_id, parlour_id } = req.body;
        const validationErrors = Review.validate({
            message,
            user_id,
            parlour_id,
        });

        if (validationErrors) {
            return res.status(422).json({ errors: validationErrors.details });
        }

        const review = await Review.findOne(req.params.id, req.body);
        if (review) res.send(review);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {
    handleGetReviews,
    handleGetOneReview,
    handlePost,
    handleDeleteOneReview,
    handlePatchOneReview,
};
