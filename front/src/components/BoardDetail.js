
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { GET_BOARD_INFO, DECODE_TOKEN, DELETE_BOARD, GET_COMMENT, CREATE_COMMENT } from '../services/API';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
    },
    backBtn: {
        position: "relatvie",
        margin:10
    },
    delBtn: {
        position: "relatvie",
        margin:10
    },
    card: {
        height: "15rem",
        minWidth: "400",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        height: "20rem",
    },
    pagenation: {
        textAlign: "center"
    },
    addArea: {
        margin: 10,
        padding: 3,
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
})

function getTimeStamp(date) {
    let d = new Date(date);
    let s =
        leadingZeros(d.getFullYear(), 4) + '-' +
        leadingZeros(d.getMonth() + 1, 2) + '-' +
        leadingZeros(d.getDate(), 2) + ' ' +

        leadingZeros(d.getHours(), 2) + ':' +
        leadingZeros(d.getMinutes(), 2) + ':' +
        leadingZeros(d.getSeconds(), 2);

    return s;
}

function leadingZeros(n, digits) {
    let zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (let i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
}


function BoardDetail(props) {
    const classes = useStyles();
    const boardInfo = {
        no: null,
        title: "",
        b_content: "",
        createdDate: "",
        name: "",
    }
    const [comment, setComment] = useState("");
    const [change, setChange] = useState(false);
    const [commentList, setCommentList] = useState([]);
    const [info, setInfo] = useState(boardInfo);
    const [isAuth, setIsAuth] = useState(false);
    const [uNo, setuNo] = useState(null);
    const itemsPerPage = 3;
    const [page, setPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(
        Math.ceil(commentList.length / itemsPerPage)
    );

    useEffect(() => {
        const token = localStorage.getItem("user");

        DECODE_TOKEN({ token }).then((decode) => {
            const userNo = decode.no;
            setuNo(userNo);
            const no = props.data;
            GET_BOARD_INFO({ no }).then((res) => {
                if (userNo === res[0].userNo) {
                    setIsAuth(true);
                }
                const date = new Date(res[0].createdDate);
                res[0].createdDate = getTimeStamp(date);
                setInfo(res[0]);
            });
        });
    }, []);

    useEffect(() => {
        
        const boardNo = props.data;
        GET_COMMENT({ boardNo }).then((boardList) => {
            console.log(boardList.data);
            setCommentList(boardList.data.reverse());
            console.log(Math.ceil(boardList.data.length / itemsPerPage));
            setNoOfPages(Math.ceil(boardList.data.length / itemsPerPage));
        })
        setChange(false)
    }, [change])

    const handleDelete = () => {
        const boardNo = props.data;
        DELETE_BOARD({ boardNo }).then(() => {
            props.handleBack();
        });
    }

    const addComment = (e) => {
        e.preventDefault();
        if (comment === "") {
            alert("comment is empty. please fill comment");
            return;
        }
        else {
            const content = comment;
            const boardNo = props.data;
            const userNo = uNo
            CREATE_COMMENT({ content, boardNo, userNo }).then((res) => {
                if (res.data === "ADD_COMMENT") {
                    alert("comment added");
                    setChange(true);
                    setComment("");
                    e.target.reset()
                }
            })
        }
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                글쓴이 : {info.name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {info.title}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {info.createdDate}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {info.b_content}
                            </Typography>
                        </CardContent>
                      
                    </Card>
                    {isAuth ? (<Button className={classes.delBtn} variant="contained" color="secondary" onClick={handleDelete}>삭제하기</Button>) : (<></>)}               
                    <Button className={classes.backBtn} variant="contained" color="secondary" onClick={props.handleBack}>뒤로가기</Button>
                 </Grid>

                <Grid item xs={12}>
                    <List>
                        {/* yourItemList.subarray(((pageNumber - 1)*(numberOfItemsForPage)), ((pageNumber)*(numberOfItemsForPage))) */}
                        {commentList.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(value =>
                        (
                            <ListItem>
                                <ListItemText primary={value.name} secondary={value.c_content} />
                            </ListItem>
                        )
                        )}
                    </List>
                    <Paper component="form" onSubmit={addComment} className={classes.addArea}>
                        <InputBase
                            className={classes.input}
                            placeholder="comment"
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton color="primary" className={classes.iconButton} onClick={addComment}>
                            <CreateIcon />
                        </IconButton>
                    </Paper>
                    <Grid container justify="center">
                        <Pagination
                            count={noOfPages}
                            page={page}
                            onChange={handlePageChange}
                            default={1}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default BoardDetail;