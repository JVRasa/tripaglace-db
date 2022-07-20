const db = require('../db-config');

async function findMany() {
    let sql = 'SELECT * FROM menu';

    const [menus] = await db.promise().query(sql);
    return menus;
}

async function findOne(id) {
    const [[menu]] = await db
        .promise()
        .query('SELECT * FROM menu WHERE id = ?', [id]);
    return menu;
}

module.exports = {
    findMany,
    findOne,
};
