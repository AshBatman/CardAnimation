import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
        width: '80%',
        position: 'relative',
        bottom: '-50%',
        left: 2
    },
    colorPrimary: {
        backgroundColor: 'grey',
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

export default function CardDesign() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p style={{ margin: '5%' }}>TATA STEEL</p>
            <BorderLinearProgress variant="determinate" value={50} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: 100,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 6
    }
}))
