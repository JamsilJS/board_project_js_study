
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { GET_BOARD_INFO } from '../services/API';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
    },
    backBtn: {
        position: "absolute",
        bottom: "25px",
        right: "25px",
        textAlign: "right",
        padding: "5px",
    },
    card: {
        height: "80vh",
        minWidth: "400",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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

    useEffect(() => {
        const no = props.data;
        GET_BOARD_INFO({ no }).then((res) => {
            const date = new Date(res[0].createdDate);
            res[0].createdDate = getTimeStamp(date);
            setInfo(res[0]);
        });
    }, [props.data])

    return (
        <div className={classes.root}>
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

            <Button className={classes.backBtn} variant="contained" color="secondary" onClick={props.handleBack}>뒤로가기</Button>
        </div>

    );
}

export default BoardDetail;