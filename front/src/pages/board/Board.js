import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LOGOUT } from '../../services/API';
import BoardList from '../../components/BoardList';
import React, { useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import BoardCreate from '../../components/BoardCreate';
const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
        height: "90vh",
        backgroundColor: "#F8F8FF"
    },
    logout: {
        position: "absolute",
        bottom: "25px",
        right: "25px",
        textAlign: "right",
        padding: "5px",
    },
    create: {
        position: "absolute",
        bottom: "25px",
        left: "25px",
        padding: "5px",
    }
})


function Board() {
    const [no, setNo] = useState(null);
    const [clicked, setClicked] = useState(null);
    const [created, setCreated] = useState(null);

    const handleLogout = async (evt) => {
        evt.preventDefault();
        LOGOUT();
        window.location.reload();
    }

    const handlecreate = (evt) => {
        evt.preventDefault();
        setCreated(true);
    }

    const createBack = () => {
        setCreated(false);
    }

    const getNo = (value) => {
        setNo(value);
        setClicked(true);
    }

    const handleBack = () => {
        setClicked(false);
    }

    const classes = useStyles();
    return (
        <>
            <Header></Header>
            <div className={classes.root}>
                {clicked ? (
                    <BoardDetail handleBack={handleBack} data={no}></BoardDetail>
                ) : (
                        <>
                            {created ? (
                                <BoardCreate createBack={createBack}></BoardCreate>
                            ) : (
                                    <>
                                        <BoardList getBoardNo={getNo}></BoardList>
                                        <div className={classes.create} >
                                            <Button variant="contained" color="primary" onClick={handlecreate}>게시판생성</Button>
                                        </div>
                                        <div className={classes.logout} >
                                            <Button variant="contained" color="secondary" onClick={handleLogout}>로그아웃</Button>
                                        </div>
                                    </>
                                )}
                        </>
                    )}
            </div>
            <Footer></Footer>
        </>
    );
}

export default Board;
