import React, { useState, useEffect } from 'react';
import { Paper, makeStyles, Typography, Button, FormControl, Select, InputLabel, MenuItem, Grid } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import TargetCurrencyInnerItem from './TargetCurrencyInnerItem/TargetCurrencyInnerItem'

import { currencyCodeNameMap } from '../../utils/currencyCodeNameMap.js'

const useStyle = makeStyles((theme) => ({
    paperRoot: (props) => ({
        margin: '50px 0 0 0',
        padding: '30px',
        width: props.width,
        boxSizing: 'border-box',
        borderBottom: '15px solid ' + lightBlue[500]
    }),
    fcCurrency: {
        minWidth: '100%',
        maxWidth: '100%',
        [theme.breakpoints.down('xs')]: {
            marginBottom: 20
        }
    },
    buttonRoot: {
        textTransform: 'capitalize',
        fontWeight: 600,
    }
}))

const TargetCurrencyCard = (props) => {
    const classes = useStyle({ width: props.width });

    const [currency, setCurrency] = useState('');
    const [shouldButtonDisable, setShouldButtonDisable] = useState(false);

    const initTargetCurrency = copyCurrencyCodeMap(currencyCodeNameMap.mapData);
    const [activeTargetCurrency, setActiveTargetCurrency] = useState([]);

    function copyCurrencyCodeMap(mapArr) {
        let arr = [];
        for (let elem of mapArr) {
            arr.push({ ...elem });
        }
        return arr;
    }

    const currencyChangeHandler = (event) => {
        event.preventDefault();
        setCurrency(event.target.value);
    }

    useEffect(() => {
        if (currency === '') setShouldButtonDisable(true)
        else setShouldButtonDisable(false)
    }, [currency])


    const addCurrencyHandler = () => {
        const toAdd = initTargetCurrency.find(item => item.code === currency);
        setActiveTargetCurrency([...activeTargetCurrency, toAdd]);
    }

    const removeCurrencyHandler = (itemCode) => {
        const toRemove = activeTargetCurrency.find(item=>item.code===itemCode);
        const updatedArr = activeTargetCurrency.filter(item=>item!==toRemove);

        setActiveTargetCurrency(updatedArr);
    }


    return (
        <Paper classes={{ root: classes.paperRoot }} elevation={10}>
            <Typography variant="h5">Target Currencies</Typography>
            <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ marginTop: 20 }}>
                <Grid item xs={12} sm={6}>
                    <FormControl classes={{ root: classes.fcCurrency }}>
                        <InputLabel id="source-currency-select">Currency</InputLabel>
                        <Select
                            labelId="source-currency-select"
                            value={currency}
                            MenuProps={{ classes: { paper: classes.menuItems } }}
                            onChange={currencyChangeHandler}>
                            {initTargetCurrency.map((item) => {
                                return (
                                    <MenuItem
                                        key={item.code}
                                        disabled={activeTargetCurrency
                                                    .findIndex(activeItem=>activeItem.code===item.code)===-1?false: true}
                                        value={item.code}>
                                        {`${item.name} (${item.code})`}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        variant="contained"
                        color="secondary"
                        classes={{ root: classes.buttonRoot }}
                        disabled={shouldButtonDisable}
                        onClick={addCurrencyHandler}>
                        Add Currency
                    </Button>
                </Grid>
            </Grid>

            {
                activeTargetCurrency
                    .map(item => (
                        <TargetCurrencyInnerItem
                            key={item.code}
                            currencyCode={item.code}
                            currency={`${item.name} (${item.code})`}
                            currencyValue={6}
                            close={removeCurrencyHandler} />
                    ))
            }
        </Paper>
    );
}

export default TargetCurrencyCard;