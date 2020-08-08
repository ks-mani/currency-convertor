import React, { useState } from 'react';
import { Paper, makeStyles, Typography, Button, FormControl, InputLabel, MenuItem, TextField, Select, Card, CardContent, Grid } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';

import { currencyCodeNameMap } from '../../utils/currencyCodeNameMap.js'

const useStyle = makeStyles((theme) => ({
    paperRoot: (props) => ({
        margin: '50px 0 0 0',
        padding: '30px',
        width: props.width,
        boxSizing: 'border-box',
        borderBottom: '15px solid ' + lightBlue[500]
    }),
    buttonRoot: {
        textTransform: 'capitalize',
        fontWeight: 600,
        marginTop: 40
    },
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
            height: 200
        },
        [theme.breakpoints.up('sm')]: {
            height: 150
        }
    }
}))

const TargetCurrencyCard = (props) => {
    const classes = useStyle({ width: props.width });

    const [currency, setCurrency] = useState('');
    const [currencyValue, setCurrencyValue] = useState(1);

    const currencyChangeHandler = (event) => {
        event.preventDefault();
        setCurrency(event.target.value);
    }


    return (
        <Paper classes={{ root: classes.paperRoot }} elevation={10}>
            <Typography variant="h5">Target Currencies</Typography>
            <Card classes={{ root: classes.cardRoot }} raised>
                <CardContent>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <CloseIcon />
                        </Grid>
                    </Grid>
                    <FormControl classes={{ root: classes.fcCurrency }}>
                        <InputLabel id="source-currency-select">Currency</InputLabel>
                        <Select
                            labelId="source-currency-select"
                            value={currency}
                            MenuProps={{ classes: { paper: classes.menuItems } }}
                            onChange={currencyChangeHandler}>
                            {currencyCodeNameMap.mapData.map((item, index) => {
                                return (
                                    <MenuItem key={item.id} value={item.code}>{`${item.name} (${item.code})`}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <FormControl classes={{ root: classes.fcCurrency }}>
                        <TextField
                            id="standard-basic"
                            label="Currency Value"
                            value={currencyValue}
                            disabled />
                    </FormControl>
                </CardContent>
            </Card>
            <Button variant="contained" color="secondary" classes={{ root: classes.buttonRoot }}>Add Currency</Button>
        </Paper>
    );
}

export default TargetCurrencyCard;