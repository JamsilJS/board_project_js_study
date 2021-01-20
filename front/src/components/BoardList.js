import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import React, { useState, useEffect } from 'react';
import { GET_ALL_BOARD } from '../services/API';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "flex",
        width: "100%",
        backgroundColor: "#FFFFFF"
    },
}))

function BoardList(props) {
    const classes = useStyles();
    const [board, setBoard] = useState([]);

    useEffect(() => {
        GET_ALL_BOARD().then((res) => {
            setBoard(res);
        });
    }, []);

    const handleClick = (no) => {
        props.getBoardNo(no);
    }

    return (
        <div>
        <List>
            {board ? (
                <div>
                    {board.map((value, index) => {
                        return (
                            <div key={index} >
                                <ListItem button onClick={() => handleClick(value.no)}>
                                    <ListItemText primary={value.title} />
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    })}
                </div>
            ) : (
                    <div>
                        empty
                    </div>
                )}
        </List >
        </div>
    );
}

export default BoardList;