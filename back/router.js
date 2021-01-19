const express = require('express');
const api = require('./api/apis');

router = express.Router();

/* Router List of APIs */
router.post('/login', api.LOGIN);
router.get('/getBoard', api.GET_ALL_BOARD);
router.post('/getBoardInfo', api.GET_BOARD_INFO);
router.post('/deleteBoard', api.DELETE_BOARD);
router.post('/createBoard', api.CREATE_BOARD);
router.post('/decodeToken',api.DECODE_TOKEN);
router.post('/createUser', api.CREATE_USER);
router.post('/deleteUser', api.DELETE_USER);
router.post('/getMyBoard', api.GET_MYBOARD);
router.post('/getComment', api.GET_COMMENT);
router.post('/createComment', api.CREATE_COMMENT);

module.exports = router;