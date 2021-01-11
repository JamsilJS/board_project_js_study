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

const CREATE_USER = async function (req, res) {
    const c_id = req.body.id;
    const c_pw = req.body.pw;
    const c_name = req.body.name;
    try {
        const connection = await DB.getConnectionInfo();
        connection.query(QUERY.Q_CREATE_USER, [c_id,c_pw,c_name], async function (error, results) {
            console.log("query is : " + QUERY.Q_CREATE_USER);
            if (error) {
                return res.json("ERROR_CREATE_USER");
            }
            else {
                await DB.disconnection(connection);
                return res.json("SUCCESS_CREATE_USER");
            }
        });
    } catch (error) {
        console.log("CREATE_USER API error : " + error);
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

const CREATE_BOARD = async function(req, res){
    try {
        const data = req.body;
        const connection = await DB.getConnectionInfo();
        const title = data.title;
        const content = data.content;
        const no = data.no;

        connection.query(QUERY.Q_CREATE_BOARD,[title,content,no],async function(err,result){
            console.log("query is : " + QUERY.Q_CREATE_BOARD);
            if(err){
                console.log("CREATE_BOARD Query Execution Error : " + err);
                throw err;
            }else{
                await DB.disconnection(connection);
                return res.json("success create board");
            }
        });

    } catch (error) {
        console.log("CREATE_BOARD API error" + error);
        throw error;
    }
}

const DELETE_BOARD = async function (req, res) {
    try {
        const data = req.body.boardNo;
        const connection = await DB.getConnectionInfo();
        connection.query(QUERY.Q_DELETE_BOARD,[data],async function(err,res){
            if(err){
                console.log("DELETE_BOARD query is error : " +  err);
                throw err;
            }
            else{
                await DB.disconnection(connection);
                return res.json("success delete board");
            }
        })
        res.json("deleted");
    } catch (error) {
        console.log("DELETE_BOARD API error" + error);
        throw error;
    }
}

const DECODE_TOKEN = async function (req, res) {
    try {
        const data = req.body;
        const result = jwt.decodeToken(data.token);
     
        return res.json(result);
    } catch (error) {
        console.log("DECODE_TOKEN API error" + error);
        throw error;
    }
}

module.exports = {
    LOGIN,
    GET_ALL_BOARD,
    GET_BOARD_INFO,
    CREATE_BOARD,
    DELETE_BOARD,
    DECODE_TOKEN,
    CREATE_USER
}