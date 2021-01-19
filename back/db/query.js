/**
 * USER QUERIES
 */
const Q_LOGIN = "SELECT * FROM user WHERE id = ? AND pw = ?";
const Q_CREATE_USER = "INSERT INTO user (id,pw,name) VALUES (?,?,?)";
const Q_DELETE_USER = "DELETE FROM user WHERE no = ?";
/**
 * BOARD QUERIES
 */
const Q_GET_ALL_BOARD = "SELECT * FROM board";
const Q_GET_BOARD_INFO = "SELECT b.no,b.title,b.b_content,b.userNo,b.createdDate,u.name FROM board as b, user as u WHERE b.no = ? AND u.no = b.userNo";
const Q_CREATE_BOARD = "INSERT INTO board (title,b_content,userNo) VALUES (?,?,?)";
const Q_DELETE_BOARD = "DELETE FROM board WHERE no = ?";
const Q_GET_MYBOARD = "SELECT * FROM board WHERE userNo = ?";
/**
 * BOARD COMMENT QUERIES
 */
const Q_GET_COMMENT = "SELECT * FROM board.comment INNER JOIN board.user ON user.no = comment.u_no WHERE comment.b_no = ?";
const Q_CREATE_COMMENT = "INSERT INTO comment (c_content, b_no, u_no) VALUES (?,?,?)";
const Q_DELETE_COMMENT = "DELETE FROM comment WHERE no = ?";


module.exports = {
    Q_LOGIN,
    Q_CREATE_USER,
    Q_GET_ALL_BOARD,
    Q_GET_BOARD_INFO,
    Q_CREATE_BOARD,
    Q_DELETE_BOARD,
    Q_DELETE_USER,
    Q_GET_MYBOARD,
    Q_GET_COMMENT,
    Q_CREATE_COMMENT,
    Q_DELETE_COMMENT
}