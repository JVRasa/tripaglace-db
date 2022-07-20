const db = require('../db-config');

async function findMany() {
    let sql = 'SELECT * FROM flavours';

    const [flavours] = await db.promise().query(sql);
    return flavours;
}

async function findOne(id) {
    const [[flavour]] = await db
        .promise()
        .query('SELECT * FROM flavours WHERE id = ?', [id]);
    return flavour;
}

module.exports = {
    findMany,
    findOne,
};
