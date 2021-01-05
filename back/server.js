const express = require("express");
const app = express();
const sql = require('./db/connet');
app.listen(50001, () => {
    console.log('Server is running');
    sql.connection();
    sql.disconnection();
});

