import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "10px",
        width: "100%",
        textAlign: "center",
        background: "#FFFAF0",
    },
})

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>자바스크립트 스터디 프로젝트</p>
        </div>
    );
}

export default Footer;