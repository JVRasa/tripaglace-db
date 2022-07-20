const db = require('../db-config');
const Joi = require('joi');

async function findMany() {
    let sql =
        'SELECT message, username, shopname FROM reviews AS re JOIN users AS us ON us.id=re.user_id JOIN parlours AS pl ON pl.id=re.parlour_id';

    const [reviews] = await db.promise().query(sql);
    return reviews;
}

async function findOne(id) {
    const [[review]] = await db
        .promise()
        .query(
            'SELECT message, username, shopname FROM reviews AS re JOIN users AS us ON us.id=re.user_id JOIN parlours AS pl ON pl.id=re.parlour_id WHERE re.id = ?',
            [id]
        );
    return review;
}

async function deleteOne(id) {
    const [{ affectedRows }] = await db
        .promise()
        .query('DELETE FROM reviews WHERE id = ?', [id]);
    return affectedRows;
}

async function patchOne(message, id) {
    const [[review]] = await db
        .promise()
        .query('UPDATE reviews SET ? WHERE id = ?', [message, id]);
    return review;
}

async function create({ message, user_id, parlour_id }) {
    const [{ insertId }] = await db
        .promise()
        .query(
            'INSERT INTO reviews (message, user_id, parlour_id) VALUES (?, ?, ?)',
            [message, user_id, parlour_id]
        );

    return { message, user_id, parlour_id, id: insertId };
}

function validate(data, forUpdate = false) {
    return Joi.object({
        message: Joi.string()
            .max(200)
            .presence(forUpdate ? 'optional' : 'required'),
        user_id: Joi.number().presence(forUpdate ? 'optional' : 'required'),
        parlour_id: Joi.number().presence(forUpdate ? 'optional' : 'required'),
    }).validate(data, { abortEarly: false }).error;
}

module.exports = {
    findMany,
    findOne,
    deleteOne,
    patchOne,
    create,
    validate,
};
