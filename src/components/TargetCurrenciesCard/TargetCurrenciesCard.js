import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    paperRoot: (props)=>({
        margin: '50px 0 0 0',
        padding: '30px',
        width: props.width,
        boxSizing:'border-box'
    })
}))

const TargetCurrencyCard = (props) => {
    const classes = useStyle({width: props.width});

    return (
            <Paper classes={{ root: classes.paperRoot }} elevation={10}>
            </Paper>
    );
}

export default TargetCurrencyCard;