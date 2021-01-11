import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { LOGIN } from '../services/API';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
        height: "90vh"
    },
    btn: {
        textAlign: "center",
        marginTop: "1rem",
    },
    inp: {
        textAlign: "center",
    },
    box: {
        paddingTop: 90,
        width: 300,
        height: 500,
        marginTop: 90,
        margin: "auto",
        background: "#FFFAF0",
        border: "solid 1px #A9A9A9",
    }
})


function Login(props) {
    const classes = useStyles();

    const [id, setID] = useState("");
    const [pw, setPW] = useState("");

    let [loginStatus, setloginStatus] = useState(null);

    const handleLogin = async (evt) => {
        evt.preventDefault();
        try {
            const res = await LOGIN({ id, pw });
            if (res === "LOGIN FAIL") {
                setloginStatus("LOGIN FAILED");
                setID("");
                setPW("");
            }
            else {
                setloginStatus(null);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            setloginStatus("LOGIN FAILED");
            setID("");
            setPW("");
        }
    }

    return (
        <div className={classes.root}>
            <Container className={classes.box} maxWidth="sm">
                <form className={classes.inp} noValidate autoComplete="off">
                    <TextField id="id" label="ID" onChange={e => setID(e.target.value)} />
                    <br />
                    <TextField id="pw" label="PW" type="password" onChange={e => setPW(e.target.value)} />
                    {loginStatus && <><h5 style={{ color: 'red' }}>{loginStatus}</h5></>}
                </form>
                <br />
                <br />
                <br />
                <br />
                <div className={classes.btn}>
                    <Button style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }} variant="contained" color="primary" onClick={handleLogin}>로그인</Button>
                    <br />
                    <br />
                    <Button style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }} variant="contained" color="secondary" onClick={props.handleReg}>회원가입</Button>
                </div>
            </Container>
        </div>
    );
}

export default Login;
