import { makeStyles } from '@material-ui/core/styles';
import stickyImg from '../img/sticky_paper.png';

function getTimeStamp(date) {
    let d = new Date(date);
    let s =
        leadingZeros(d.getFullYear(), 4) + '-' +
        leadingZeros(d.getMonth() + 1, 2) + '-' +
        leadingZeros(d.getDate(), 2) + ' ' +

        leadingZeros(d.getHours(), 2) + ':' +
        leadingZeros(d.getMinutes(), 2) + ':' +
        leadingZeros(d.getSeconds(), 2);

    return s;
}

function leadingZeros(n, digits) {
    let zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (let i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
}


const useStyles = makeStyles((theme) => ({
    paperRoot:{
        position:"relative",
        padding:10,
        margin:5,
    },
    img:{
        width:180,
        height:160,
    },
    title:{
        position:"absolute",
        fontSize: "1.2em",
        bottom: 70,
        left: 100
    },
    date: {
        position:"absolute",
        fontSize: "0.6em",
        bottom: 30,
        left: 100 
    },
    t:{
        position:"absolute",
        fontSize: "0.9em",
        color:"#696969",
        bottom: 75,
        left: 45
    }
}))

function StickyPaper(props) {
    const classes = useStyles();
    console.log(props);
    return (
        <div className={classes.paperRoot}>
            <div className={classes.t}>
            </div>
            <div className={classes.title}>
                {props.value.title}
            </div>
            <div className={classes.date}>
                {getTimeStamp(props.value.createdDate)}
            </div>
            <img src={stickyImg} onClick={()=>{props.handleClick(props.value.no)}}></img>
        </div>
    );
}

export default StickyPaper;