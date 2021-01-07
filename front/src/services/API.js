import axios from 'axios';

const API_URL = "http://localhost:50001/api";
const HEADERS = { 'Content-Type': 'application/json' };

const LOGIN = async (userInfo) => {
    const res = await axios.post(`${API_URL}/login`, userInfo, { HEADERS });

    const resultData = res.data;
    if (resultData === "N_USER") {
        return "LOGIN FAIL";
    }
    else {
        localStorage.setItem("user", JSON.stringify(res.data));
        return resultData;
    }
}

const LOGOUT = () => {
    localStorage.removeItem("user");
}

const GET_USER_INFO = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const GET_ALL_BOARD = async () => {
    const res = await axios.get(`${API_URL}/getBoard`, { HEADERS });
    return res.data;
}

const GET_BOARD_INFO = async (no) => {
    const res = await axios.post(`${API_URL}/getBoardInfo`, no, { HEADERS });
    return res.data;
}

const CREATE_BOARD = async (data) => {
    await axios.post(`${API_URL}/createBoard`, data, { HEADERS }).then((res) => console.log(res));
}

export {
    LOGIN,
    LOGOUT,
    GET_USER_INFO,
    GET_ALL_BOARD,
    GET_BOARD_INFO,
    CREATE_BOARD
}