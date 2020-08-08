import React, { useState, useRef, useEffect } from 'react';
import { Paper, makeStyles, Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';

import { currencyCodeNameMap } from '../../utils/currencyCodeNameMap.js'
import { lightBlue } from '@material-ui/core/colors';

const useStyle = makeStyles((theme) => ({
    paperRoot: (props) => ({
        margin: '50px 0 0 0',
        padding: '30px',
        width: props.width,
        boxSizing: 'border-box',
        borderBottom: '15px solid ' + lightBlue[500]
    }),
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
    }
}))

const SourceCurrencyCard = (props) => {
    const classes = useStyle({ width: props.width });

    const [currency, setCurrency] = useState('');
    const [currencyValue, setCurrencyValue] = useState(1);

    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    
    const timerRef = useRef(null);

    const currencyChangeHandler = (event) => {
        event.preventDefault();
        setCurrency(event.target.value);
    }

    const currencyValueChangeHandler = (event) => {
        event.preventDefault();
        const value = event.target.value;
        if(timerRef.current){
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            if(validateTheInput(value)){
                setIsError(false);
                setErrorMessage('');
                setCurrencyValue(value);
            } else {
                setIsError(true);
                setErrorMessage('Incorrect Input')
            }
            clearTimeout(timerRef.current)
        }, 100);        
    }

    function validateTheInput(value){
        let flag = true;
        for(let i=0;i<value.length;i++){
            if(value.charCodeAt(i)<=47 || value.charCodeAt(i)>=58){
                flag = false;
            }
        }
        return flag;
    }

    useEffect(()=>{
        props.setCurrCode(currency);
    },[currency, props])

    useEffect(()=>{
        props.setCurrValue(currencyValue);
    },[currencyValue, props])

    return (
        <Paper classes={{ root: classes.paperRoot }} elevation={10}>
            <Typography variant="h5">Source Currency</Typography>
            <div style={{ marginTop: '20px' }}>
                <form autoComplete="off">
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
                            label="Currency Value" 
                            defaultValue={currencyValue} 
                            error={isError}
                            helperText={isError? errorMessage: null}
                            onChange={currencyValueChangeHandler}/>
                    </FormControl>

                </form>
            </div>
        </Paper>
    );
}

export default SourceCurrencyCard;