import React from 'react';

import {FormControl, TextField, Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles((theme) => ({
    fcCurrency: {
        minWidth: 200,
        maxWidth: 200,
        marginRight: 20,
        [theme.breakpoints.down('xs')]: {
            minWidth: '100%',
            maxWidth: '100%',
            marginBottom: 20
        }
    },
    menuItems: {
        maxHeight: '400px'
    },
    cardRoot: {
        position: 'relative',
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            minHeight: 180
        },
        [theme.breakpoints.up('sm')]: {
            height: 120
        }
    }
}))

const TargetCurrencyInnerItem = (props) => {
    const classes = useStyle({ width: props.width });
    return (
        <Card classes={{ root: classes.cardRoot }} raised>
            <CardContent>
                <Grid container justify="flex-end">
                    <Grid item>
                        <CloseIcon />
                    </Grid>
                </Grid>
                <FormControl classes={{ root: classes.fcCurrency }}>
                    <TextField
                        label="Currency Type"
                        value={props.currency}
                        disabled />
                </FormControl>
                <FormControl classes={{ root: classes.fcCurrency }}>
                    <TextField
                        label="Currency Value"
                        value={props.currencyValue}
                        disabled />
                </FormControl>
            </CardContent>
        </Card>
    )
}

export default TargetCurrencyInnerItem;