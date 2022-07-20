const db = require('../db-config');
const Joi = require('joi');

async function findMany() {
    let sql = 'SELECT * FROM favourites';

    const [favourites] = await db.promise().query(sql);
    return favourites;
}

async function findOne(id) {
    const [[favourite]] = await db
        .promise()
        .query('SELECT * FROM favourites WHERE id = ?', [id]);
    return favourite;
}

async function create({ user_id, parlour_id }) {
    const [{ insertId }] = await db
        .promise()
        .query('INSERT INTO favourites (user_id, parlour_id) VALUES (?, ?)', [
            user_id,
            parlour_id,
        ]);

    return { user_id, parlour_id, id: insertId };
}

function validate(data, forUpdate = false) {
    return Joi.object({
        user_id: Joi.number().presence(forUpdate ? 'optional' : 'required'),
        parlour_id: Joi.number().presence(forUpdate ? 'optional' : 'required'),
    }).validate(data, { abortEarly: false }).error;
}

module.exports = {
    findMany,
    findOne,
    create,
    validate,
};
