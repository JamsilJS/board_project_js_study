const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '115.85.182.177',
    user: 'root',
    password: '1234',
    database: 'board'
});
module.exports = {
    connection: async function () {
        try {
            await connection.connect();
            console.log('mysql connected');
        } catch (error) {
            console.log('connection error : ' + error);
            throw error;
        }
    },

    disconnection: async function () {
        try {
            await connection.end();
            console.log('mysql disconnected');
        } catch (error) {
            console.log('connection error : ' + error);
            throw error;
        }
    }
}
