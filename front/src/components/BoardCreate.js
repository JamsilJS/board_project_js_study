import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
        top: 50,
    },

    backBtn: {
        position: "absolute",
        bottom: "25px",
        right: "25px",
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
    const handleCreate = () => {

    }

    const classes = useStyles();
    return (
        <div>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="title" label="제목" variant="outlined" helperText="제목을 입력하세요." />
                <br />
                <br />
                <TextField id="content" label="내용" variant="outlined" multiline rows={10} helperText="내용을 입력하세요." fullWidth="40" />
            </form>
            <Button className={classes.createBtn} variant="contained" color="primary" onClick={handleCreate}>생성하기</Button>
            <Button className={classes.backBtn} variant="contained" color="secondary" onClick={props.createBack}>뒤로가기</Button>
        </div>
    );
}

export default BoardCreate;