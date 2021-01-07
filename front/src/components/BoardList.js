import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import React, { useState, useEffect } from 'react';
import { GET_ALL_BOARD } from '../services/API';
import List from '@material-ui/core/List';

function BoardList(props) {
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
        <List>
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
        </List >

    );
}

export default BoardList;