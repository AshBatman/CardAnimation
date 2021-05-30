import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
        width: '80%',
    },
    colorPrimary: {
        backgroundColor: 'grey',
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

export default function CardDesign({ name, totoalSales, targetSales }) {
    const track = totoalSales * 100 / targetSales >= 75 ? 'On Track' : 'Off Track';
    const backColor = totoalSales * 100 / targetSales >= 75 ? 'green' : 'yellow';
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <p style={{ margin: '5%', width: '50%', fontWeight: 'bold', fontSize: 18 }}>{name}</p>
                <p style={{ fontSize: 14, fontWeight: 'bold' }}>{totoalSales * 100 / targetSales}%</p>
                <p style={{ fontSize: 14 }}>Complete</p>
            </div>
            <div style={{ marginLeft: '5%', position: 'relative', left: 2, top: '18%' }}>
                <div style={{ flexDirection: 'row', display: 'flex', marginBottom: 5 }}>
                    <div>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>Total Sales - {totoalSales} Crores</p>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>Target Sales - {targetSales} Crores</p>
                    </div>
                    <p style={{ marginLeft: 15, backgroundColor: backColor, padding: 5, marginTop: 2 }}>{track}</p>
                </div>
                <BorderLinearProgress variant="determinate" value={50} />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: 150,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 6,
        margin: 20
    }
}))
