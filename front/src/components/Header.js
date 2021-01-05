import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "200px",
        textAlign: "center",
        background: "#FFFFFF"
    },
})


function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>게시판</p>
        </div>
    );
}

export default Header;