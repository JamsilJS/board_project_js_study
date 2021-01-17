import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CREATE_BOARD, DECODE_TOKEN } from '../services/API';
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
        top: 50,
    },

    backBtn: {
        position: "absolute",
        bottom: "25px",
        left: "200px",
        textAlign: "right",
        padding: "5px",
    },

    createBtn: {
        position: "absolute",
        bottom: "25px",
        left: "25px",
        textAlign: "right",
        padding: "5px",
    }

})

function BoardCreate(props) {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    const handleCreate = () => {
        if(title === "" || content === "") {
            alert("empty content or title");
            return;
        }
        const token = localStorage.getItem("user");
        DECODE_TOKEN({token}).then((res)=>{
            const no = res.no;
            CREATE_BOARD({ title, content, no }).catch((err) => { console.log(err) }).then(()=>{
                props.createBack();
            });
        });
    }

    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="title" label="제목" variant="outlined" helperText="제목을 입력하세요." onChange={e => setTitle(e.target.value)}/>
                <br />
                <br />
                <TextField id="content" label="내용" variant="outlined" multiline rows={10} helperText="내용을 입력하세요." onChange={e => setContent(e.target.value)} fullWidth={true} />
            </form>
            <Button className={classes.backBtn} variant="contained" color="secondary" onClick={props.createBack}>뒤로가기</Button>
            <Button className={classes.createBtn} variant="contained" color="primary" onClick={handleCreate}>생성하기</Button>
           
        </div>
    );
}

export default BoardCreate;