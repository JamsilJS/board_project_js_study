import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LOGOUT, DECODE_TOKEN, DELETE_USER} from '../../services/API';
import BoardList from '../../components/BoardList';
import React, { useState, useEffect } from 'react';
import BoardDetail from '../../components/BoardDetail';
import BoardCreate from '../../components/BoardCreate';
import SideMenu from '../../components/SideMenu';
import UserInfo from '../../components/UserInfo';
import Grid from '@material-ui/core/Grid';
import MyBoardList from '../../components/MyBoardList';
const useStyles = makeStyles((theme) => ({
    mainRoot: {
        backgroundColor: "#FFFFFF",
        heigth: "100%",
    },
    logout: {
        position: "relative",
        textAlign: "right",
        padding: "5px",
    },
    create: {
        position: "relative",
        padding: "5px",
    },
    userInfo: {
        border: "1px solid black"
    },
}))


function Board() {
    const [no, setNo] = useState(null);
    const [clicked, setClicked] = useState(null);
    const [created, setCreated] = useState(null);
    const [userInfo, setUserInfo] = useState({});
    const [clickUserInfo, setClickUserInfo] = useState(null);
    const [clickMyBoard, setClickMyBoard] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem("user");

        DECODE_TOKEN({ token }).then((decode) => {
            setUserInfo(decode);
        });
    },[]);

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

    const handleUserDelete = () => {
        const userNo = userInfo.no
        DELETE_USER({ userNo }).then((res) => {
            if (res.data === "DELETE USER SUCCESS"){
                LOGOUT();
                alert("user deleted");
                window.location.reload();
            }
            else{
                alert("user delete error");
            }
        })
    }
    
    const handleUserInfo = () => {
        setClickUserInfo(true)
    }

    const userInfoBack = () => {
        setClickUserInfo(false)
    }

    const handleMyBoard = () => {
        setClickMyBoard(true)
    }

    const myBoardBack = () => {
        setClickMyBoard(false)
    }

    const getMyNo = (value) => {
        setNo(value);
        setClickMyBoard(false);
        setClicked(true);
    }

    const classes = useStyles();
    return (
        <>
            <div className={classes.mainRoot}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {clickMyBoard ? (
                            <>
                                <MyBoardList userInfo={userInfo} myBoardBack={myBoardBack} getBoardNo={getMyNo} setClickMyBoard={setClickMyBoard}></MyBoardList>
                            </>
                        ) : (
                            <>
                                    {clickUserInfo ? (
                                        <>
                                            <UserInfo userInfo={userInfo} userInfoBack={userInfoBack}></UserInfo>
                                        </>
                                    ) : (
                                            <>
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
                                                                    </>
                                                                )}
                                                        </>
                                                    )}
                                            </>
                                        )}
                            </>
                        )}      
                    </Grid>
                    <Grid item xs>
                        <SideMenu userInfo={userInfo} handleUserDelete={handleUserDelete} handleUserInfo={handleUserInfo} handleMyBoard={handleMyBoard}></SideMenu>
                        <div className={classes.logout} >
                            <Button variant="contained" color="secondary" onClick={handleLogout}>로그아웃</Button>
                        </div>
                    </Grid>
                </Grid>
                
                </div>
        </>
    );
}

export default Board;
