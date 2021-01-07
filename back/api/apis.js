const DB = require('../db/connet');
const QUERY = require('../db/query');
const jwt = require("./jwt");

const LOGIN = async function (req, res) {
    const id = req.body.id;
    const pw = req.body.pw;
    try {
        const connection = await DB.getConnectionInfo();
        let result = [];
        connection.query(QUERY.Q_LOGIN, [id, pw], async function (error, results, fields) {
            console.log("query is : " + QUERY.Q_LOGIN);
            if (error) throw error;

            if (typeof results[0] == "undefined") {
                return res.json("N_USER");
            }
            else {
                result = JSON.stringify(results[0]);
                const token = jwt.getToken(result);
                await DB.disconnection(connection);
                return res.json(token);
            }
        });
    } catch (error) {
        console.log("LOGIN API error : " + error);
        throw error;
    }
}

const GET_ALL_BOARD = async function (req, res) {
    try {
        const connection = await DB.getConnectionInfo();
        let result = [];
        connection.query(QUERY.Q_GET_ALL_BOARD, async function (error, results, fields) {
            console.log("query is : " + QUERY.Q_GET_ALL_BOARD);
            if (error) throw error;

            if (typeof results[0] == "undefined") {
                return res.json("N_BOARD");
            }
            else {
                result = results;
                await DB.disconnection(connection);
                return res.json(result);
            }
        });
    } catch (error) {
        console.log("GET_ALL_BOARD API error : " + error);
        throw error;
    }
}

const GET_BOARD_INFO = async function (req, res) {
    try {
        const no = req.body.no;
        const connection = await DB.getConnectionInfo();
        let result = [];
        connection.query(QUERY.Q_GET_BOARD_INFO, [no], async function (error, results, fields) {
            console.log("query is : " + QUERY.Q_GET_BOARD_INFO);
            if (error) throw error;

            if (typeof results[0] == "undefined") {
                return res.json("N_BOARD");
            }
            else {
                result = results;
                await DB.disconnection(connection);
                return res.json(result);
            }
        });
    } catch (error) {
        console.log("GET_ALL_BOARD API error : " + error);
        throw error;
    }
}

module.exports = {
    LOGIN,
    GET_ALL_BOARD,
    GET_BOARD_INFO
}