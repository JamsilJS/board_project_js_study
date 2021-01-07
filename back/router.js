const express = require('express');
const api = require('./api/apis');

router = express.Router();
router.post('/login', api.LOGIN);
router.get('/getBoard', api.GET_ALL_BOARD);
router.post('/getBoardInfo', api.GET_BOARD_INFO);

module.exports = router;