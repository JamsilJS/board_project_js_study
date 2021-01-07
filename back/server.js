const express = require("express");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const PORT = process.env.SERVICE_PORT || 50001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

app.use('/api', require('./router'));

app.use(function (reqest, response) {
    console.warn("404 Page Not Found", reqest.url);
    response.sendStatus(404);
    return;
});
