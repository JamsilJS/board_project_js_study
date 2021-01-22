import React, { useState, useEffect } from 'react';
import { GET_ALL_BOARD } from '../services/API';
import { makeStyles } from '@material-ui/core/styles';
import StickyPaper from '../components/StickyPaper';

const useStyles = makeStyles((theme) => ({
    listRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflowY: 'hidden',
        margin:0,
        padding:0
    },
    gridList: {
        width: "100%",
        height: 400,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    imgList: {
        width: 300,
        height: 300,
    }
}));
function BoardList(props) {
    const classes = useStyles();
    const [board, setBoard] = useState([]);
    const [startIndex, setStartIndex] = React.useState(0);

    useEffect(() => {
        GET_ALL_BOARD().then((res) => {
            setBoard(res);
        });
    }, []);

    const handleClick = (no) => {
        props.getBoardNo(no);
    }

    const skickyPaperClick = () => {
        
    }

    const renderStickyPaper = () => {
        const stickyPaper = board.map((value) => {
            const no = Math.floor(Math.random()*4 + 1);
            return (
                //() => handleClick(value.no)
                <StickyPaper value={value} randNo={no} handleClick={handleClick}></StickyPaper>
            )
        })
        return stickyPaper
    }

    const loadItems = () => {
        /* just simulating a load of more items from an api here */
        // setTimeout(() => {
        //     let board = board.slice()
        // }, 1000)
    }

    const handleVisit = () => {
        loadItems()
    }

    return (
        <div className={classes.listRoot}>
            {renderStickyPaper()}
        </div>
    );
}

export default BoardList;