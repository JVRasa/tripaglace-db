const db = require('../db-config');
const Joi = require('joi');

async function findMany({ flavours }) {
    let sql =
        'SELECT pa.id, shopname, address, zip, city, GROUP_CONCAT(DISTINCT flavourname ORDER BY flavourname) AS flavours FROM parlours AS pa JOIN menu AS me ON me.parlour_id=pa.id JOIN flavours AS fl ON fl.id=me.flavour_id GROUP BY pa.id';

    const valuesToEscape = [];
    if (flavours) {
        sql += ' HAVING GROUP_CONCAT(flavourname) LIKE ?';
        valuesToEscape.push(flavours);
    }

    const [parlours] = await db.promise().query(sql, valuesToEscape);
    return parlours;
}

async function findOne(id) {
    const [[parlour]] = await db
        .promise()
        .query(
            'SELECT pa.id, shopname, address, zip, city, GROUP_CONCAT(DISTINCT flavourname ORDER BY flavourname) AS flavours FROM parlours AS pa JOIN menu AS me ON me.parlour_id=pa.id JOIN flavours AS fl ON fl.id=me.flavour_id WHERE pa.id = ?',
            [id]
        );
    return parlour;
}

async function create({ shopname, address, zip, city }) {
    const [{ insertId }] = await db
        .promise()
        .query(
            'INSERT INTO parlours (shopname, address, zip, city) VALUES (?, ?, ?, ?)',
            [shopname, address, zip, city]
        );

    return { shopname, address, zip, city, id: insertId };
}

function validate(data, forUpdate = false) {
    return Joi.object({
        shopname: Joi.string()
            .max(50)
            .presence(forUpdate ? 'optional' : 'required'),
        address: Joi.string()
            .max(100)
            .presence(forUpdate ? 'optional' : 'required'),
        zip: Joi.string()
            .max(6)
            .presence(forUpdate ? 'optional' : 'required'),
        city: Joi.string()
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
