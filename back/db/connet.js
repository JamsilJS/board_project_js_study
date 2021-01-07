const mysql = require('mysql');


module.exports = {
    getConnectionInfo: async function () {
        const connection = mysql.createConnection({
            host: '115.85.182.177',
            user: 'root',
            password: '1234',
            database: 'board'
        });

        return connection;
    },

    connection: async function () {
        try {
            await connection.connect();
            console.log('mysql connected');
            return connection;
        } catch (error) {
            console.log('connection error : ' + error);
            throw error;
        }
    },

    disconnection: async function (connection) {
        try {
            await connection.end();
            console.log('mysql disconnected');
        } catch (error) {
            console.log('disconnection error : ' + error);
            throw error;
        }
    },
}
