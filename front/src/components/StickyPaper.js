import { makeStyles } from '@material-ui/core/styles';
import stickyImg1 from '../img/sticky_1.png';
import stickyImg2 from '../img/sticky_2.png';
import stickyImg3 from '../img/sticky_3.png';
import stickyImg4 from '../img/sticky_4.png';
import stickyImg5 from '../img/sticky_5.png';
import Typography from '@material-ui/core/Typography';

const imgList = [stickyImg1,stickyImg2,stickyImg3,stickyImg4,stickyImg5]

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
        padding:5,
        margin:2,
    },
    img:{
        width:280,
        height:280,
    },
    title:{
        wordBreak: "break-all",
        position:"absolute",
        fontSize: "1.2em",
        marginRight: 50,
        top: 60,
        left: 80
    },
    date: {
        position:"absolute",
        fontSize: "0.6em",
        bottom: 80,
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
                <Typography>
                    {props.value.title}
                </Typography>
            </div>
            <div className={classes.date}>
                {getTimeStamp(props.value.createdDate)}
            </div>
            <img src={imgList[props.randNo]} className={classes.img} onClick={()=>{props.handleClick(props.value.no)}}></img>
        </div>
    );
}

export default StickyPaper;