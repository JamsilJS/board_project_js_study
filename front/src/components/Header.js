import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "34px",
        width: "100%",
        textAlign: "center",
        background: "#FFFFFF"
    },
})


function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p><b>게시판</b></p>
        </div>
    );
}

export default Header;