import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "34px",
        width: "100%",
        textAlign: "center",
        background: "#F8F8FF",
        margin: 0,
        padding: 0,
    },
})


function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <b>게시판</b>
        </div>
    );
}

export default Header;