import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { CREATE_USER } from '../services/API';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
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


function Register(props) {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [pw, setPW] = useState("");
    const [registerStatus, setRegisterStatus] = useState(null);

    const handleRegister = async (evt) => {
        evt.preventDefault();
        if(id === "" || name === "" || pw === ""){
            setRegisterStatus("REGISTRATION FAILED");
        }
        else{
            try {
                CREATE_USER({ id, pw, name }).then((res) => {
                    if (res === "ERROR_OCCURED") {
                        setRegisterStatus("REGISTRATION FAILED");
                        setID("");
                        setName("");
                        setPW("");
                    }
                    else {
                        alert("success!");
                        setRegisterStatus(null);
                        props.handleBack();
                    }
                });
            } catch (error) {
                console.log(error);
                setRegisterStatus("REGISTRATION FAILED");
                setID("");
                setName("");
                setPW("");
            }
        }
    }

    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Container className={classes.box} maxWidth="sm">
                    <form className={classes.inp} noValidate autoComplete="off">
                        <TextField id="id" label="ID" onChange={e => setID(e.target.value)} />
                        <br />
                        <TextField id="name" label="NAME" onChange={e => setName(e.target.value)} />
                        <br />
                        <TextField id="pw" label="PW" type="password" onChange={e => setPW(e.target.value)} />
                        {registerStatus && <><h5 style={{ color: 'red' }}>{registerStatus}</h5></>}
                    </form>
                    <br />
                    <br />
                    <div className={classes.btn}>
                        <Button style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }} variant="contained" color="primary" onClick={handleRegister}>가입하기</Button>
                        <br />
                        <br />
                        <Button style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }} variant="contained" color="secondary" onClick={props.handleBack}>뒤로가기</Button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Register;
