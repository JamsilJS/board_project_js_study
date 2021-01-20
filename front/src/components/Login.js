import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { LOGIN } from '../services/API';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
    },
    btn: {
        textAlign: "center",
        marginTop: "1rem",
    },
    inp: {
        textAlign: "center",
    },
    box: {
        paddingTop: 60,
        width: 350,
        height: 500,
        marginTop: 50,
        margin: "auto",
        background: "#FFFFFF",
        border: "solid 1px #A9A9A9",
        boxShadow: "1px 1px 1px 1px",
        borderRadius: "35px"
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
                    <h5 >
                        LOGIN
                    </h5>
                    <TextField id="id" label="ID" onChange={e => setID(e.target.value)} />
                    <br />
                    <TextField id="pw" label="PW" type="password" onChange={e => setPW(e.target.value)} />
                    {loginStatus && <><h5 style={{ color: 'red', margin: 0 }}>{loginStatus}</h5></>}
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
