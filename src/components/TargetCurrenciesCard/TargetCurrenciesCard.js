import React from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';

const useStyle = makeStyles((theme) => ({
    paperRoot: (props)=>({
        margin: '50px 0 0 0',
        padding: '30px',
        width: props.width,
        boxSizing:'border-box',
        borderBottom: '15px solid '+lightBlue[500]
    })
}))

const TargetCurrencyCard = (props) => {
    const classes = useStyle({width: props.width});

    return (
            <Paper classes={{ root: classes.paperRoot }} elevation={10}>
                <Typography variant="h5">Target Currencies</Typography>
            </Paper>
    );
}

export default TargetCurrencyCard;