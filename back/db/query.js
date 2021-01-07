const Q_LOGIN = "SELECT * FROM user WHERE id = ? AND pw = ?";
const Q_GET_ALL_BOARD = "SELECT * FROM board";
const Q_GET_BOARD_INFO = "SELECT b.no,b.title,b.b_content,b.createdDate,u.name FROM board as b, user as u WHERE b.no = ? AND u.no = b.userNo";

module.exports = {
    Q_LOGIN,
    Q_GET_ALL_BOARD,
    Q_GET_BOARD_INFO
}