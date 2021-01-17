import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import React, { useState, useEffect } from 'react';
import { GET_MYBOARD } from '../services/API';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

function MyBoardList(props) {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const userNo = props.userInfo.no;
        GET_MYBOARD({ userNo }).then((res) => {
            console.log(res.data.length)
            if(res.data.length == 0){
                setBoard([])
            }
            else{
                setBoard(res.data);
            }
        });
    }, []);

    const handleClick = (no) => {
        props.getBoardNo(no);
    }

    return (
        <>
        <List>
            {board ? (
                <>
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
                </>
            ) : (
                <>
                    empty
                </>
            )}
        </List >
            <Button variant="contained" color="secondary" onClick={props.myBoardBack}>Back</Button>
        </>
    );
}

export default MyBoardList;