const mysql = require('mysql');
const { database } = require('./keys');

const { promisify } = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONECCTION_LOST') {
            console.error('conexion perdida');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error("Multiples conexiones en la base de datos");
        }
        if (err.code === 'ECONNREFUSED') {
            console.error("conexion rechazada");
        }
    }
    if (connection) {
        connection.release();
        console.log('conectado a la base de datos')
    }
 
});

pool.query = promisify(pool.query);
module.exports = pool;