const db = require('../db-config');
const Joi = require('joi');

async function findMany() {
    let sql = 'SELECT * FROM users';

    const [users] = await db.promise().query(sql);
    return users;
}

async function findOne(id) {
    const [[user]] = await db
        .promise()
        .query('SELECT * FROM products WHERE id = ?', [id]);
    return user;
}

async function create({ username, email, password }) {
    const [{ insertId }] = await db
        .promise()
        .query(
            'INSERT INTO products (username, email, password) VALUES (?, ?, ?)',
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
