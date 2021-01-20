import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import logImg from '../img/header_logo.png';
const useStyles = makeStyles((theme) => ({
    header: {
        position: "flex",
        textAlign: "center",
        margin: 0,
        padding: 0,
        top:0,
        background: "#FFFFFF",
        alignItems:"center",
    },
    img: {
        padding: 30,
        width: 120,
        height: 120,
    }
}))


function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} elevation={0} position="relative">
            <img src={logImg} className={classes.img} alt="load image failed"></img>
        </AppBar>
    );
}

export default Header;