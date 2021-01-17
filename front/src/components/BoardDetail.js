
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { GET_BOARD_INFO, DECODE_TOKEN, DELETE_BOARD} from '../services/API';
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
        position: "absolute",
        bottom: "450px",
        right: "25px",
        textAlign: "right",
        padding: "5px",
    },
    delBtn:{
        position: "absolute",
        bottom: "400px",
        right: "25px",
        textAlign: "right",
        padding: "5px",
    },
    card: {
        height: "45vh",
        minWidth: "400",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paper:{
        height: "40vh",
    },
    pagenation:{
        textAlign:"center"
    },
    addArea:{
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
    const [info, setInfo] = useState(boardInfo);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("user");

        DECODE_TOKEN({ token }).then((decode)=>{
            const userNo = decode.no;
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
    }, [props.data]);

    const handleDelete = () =>{
        const boardNo = props.data;
        DELETE_BOARD({boardNo}).then(()=>{
            props.handleBack();
        });
    }

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
                </Grid>

                <Grid item xs={12}>
                    <List>
                        <ListItem>
                            <ListItemText primary="ID" secondary="TEST" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="ID" secondary="TEST" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="ID" secondary="TEST" />
                        </ListItem>
                    </List>
                    <Paper component="form" className={classes.addArea}>
                        <InputBase
                            className={classes.input}
                            placeholder="comment"
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton color="primary" className={classes.iconButton}>
                            <CreateIcon />
                        </IconButton>
                    </Paper>
                    <Grid container justify="center">
                        <Pagination alignItems="center" justify="center"></Pagination>
                    </Grid>
                </Grid>
            </Grid>
            
            <Button className={classes.backBtn} variant="contained" color="secondary" onClick={props.handleBack}>뒤로가기</Button>
       </div>
    );
}

export default BoardDetail;