import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "30px",
        width: "100%",
        textAlign: "center",
        background: "#F8F8FF",
        margin:0,
        padding:0,
    },
})

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            자바스크립트 스터디 프로젝트
        </div>
    );
}

export default Footer;