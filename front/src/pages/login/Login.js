import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    btn: {
        textAlign: "center",
        marginTop: "1rem",
    },
    inp: {
        textAlign: "center",
    }
})


function Login() {
    const classes = useStyles();
    return (
        <>
            <Header></Header>
            <form className={classes.inp} noValidate autoComplete="off">
                <TextField id="ID" label="ID" />
                <br />
                <TextField id="PW" label="PW" />
            </form>
            <div className={classes.btn}>
                <Button variant="contained" color="primary">로그인</Button>
                <br />
                <br />
                <Button variant="contained" color="secondary">회원가입</Button>
            </div>



            <Footer></Footer>
        </>
    );
}

export default Login;
