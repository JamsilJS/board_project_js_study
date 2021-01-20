import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    footer: {
        padding:" 15px 5px",
        marginTop: "auto",
    },
    footerOne: {
        display: "block",
        color: "#C1BFBF",
        float:"right"
    },
    footerTwo: {
        display: "inline",
        color: "#C1BFBF",
    },
    img: {
        display: "inline",
        width: 30,
        height: 30,
    },
    first: {
        
    },
    second: {
        
    }
})

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.first}>
                <div className={classes.footerTwo}>
                <Typography >© Copyright by JS Study</Typography>
                </div>
            </div>
            <div className={classes.second}>
                <div className={classes.footerOne}>
                    <Typography >℗ Board Project</Typography>
                    <Typography >This site made for Project Study</Typography>
                </div> 
            </div>
        </div>
    );
}

export default Footer;