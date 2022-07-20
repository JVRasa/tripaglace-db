const db = require('../db-config');
const Joi = require('joi');

async function findMany() {
    let sql =
        'SELECT username, email, password, shopname AS favourite_shops FROM users AS us LEFT JOIN favourites AS fa ON fa.user_id=us.id LEFT JOIN parlours AS pa ON pa.id=fa.parlour_id';

    const [users] = await db.promise().query(sql);
    return users;
}

async function findOne(id) {
    const [[user]] = await db
        .promise()
        .query(
            'SELECT username, email, password, shopname AS favourite_shops FROM users AS us LEFT JOIN favourites AS fa ON fa.user_id=us.id LEFT JOIN parlours AS pa ON pa.id=fa.parlour_id WHERE id = ?',
            [id]
        );
    return user;
}

async function create({ username, email, password }) {
    const [{ insertId }] = await db
        .promise()
        .query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password]
        );

    return { username, email, password, id: insertId };
}

function validate(data, forUpdate = false) {
    return Joi.object({
        username: Joi.string()
            .max(50)
            .presence(forUpdate ? 'optional' : 'required'),
        email: Joi.string()
            .max(100)
            .presence(forUpdate ? 'optional' : 'required'),
        password: Joi.string()
            .max(100)
            .presence(forUpdate ? 'optional' : 'required'),
    }).validate(data, { abortEarly: false }).error;
}

module.exports = {
    findMany,
    findOne,
    create,
    validate,
};
