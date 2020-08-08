import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

import SourceCurrencyCard from '../SourceCurrencyCard/SourceCurrencyCard'
import TargetCurrenciesCard from '../TargetCurrenciesCard/TargetCurrenciesCard'

import currAxios from '../../utils/currApiAxiosInstance.js'
import { lightBlue } from '@material-ui/core/colors';


const useWidthSetterHook = (containerRef) => {
    const [childWidth, setChildWidth] = useState('0px');
    const timerId = useRef(null);
    const setWidthFunc = useCallback(() => {
        const wholeWidth = containerRef.current.offsetWidth;
        const leftPadding = parseInt(window.getComputedStyle(containerRef.current).getPropertyValue('padding-left'));
        const rightPadding = parseInt(window.getComputedStyle(containerRef.current).getPropertyValue('padding-right'));
        const netWidth = wholeWidth - leftPadding - rightPadding;
        if (netWidth >= 552) {
            if (childWidth !== 552) setChildWidth(552 + 'px')
        } else {
            setChildWidth(netWidth + 'px')
        }
    }, [childWidth, containerRef])

    const widthCallback = useCallback(() => {
        if (timerId.current) {
            clearTimeout(timerId.current)
        }
        timerId.current = setTimeout(() => {
            setWidthFunc();
        }, 50)
    }, [setWidthFunc])

    useLayoutEffect(() => {
        setWidthFunc();
        window.addEventListener('resize', widthCallback);

        return () => {
            window.removeEventListener('resize', widthCallback)
        }
    }, [setWidthFunc, widthCallback])

    return childWidth;
}


const Content = () => {
    const containerRef = useRef();
    const childWidth = useWidthSetterHook(containerRef);

    const [currencyCode, setCurrencyCode] = useState('');
    const [currencyValue, setCurrencyValue] = useState(1);
    const [conversionRate, setConversionRates] = useState(null);
    const [isRateFetchError, setIsRateFetchError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (currencyCode !== '') {
            setIsLoading(true);
            currAxios.get('/' + currencyCode)
                .then((response) => {
                    setConversionRates(response.data.conversion_rates);
                })
                .catch(() => {
                    setIsRateFetchError(true)
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }, [currencyCode])

    return (
        <Container fixed ref={containerRef}>
            <Grid container
                direction="column" justify="center" alignItems="center">
                <Grid item>
                    <SourceCurrencyCard
                        width={childWidth}
                        setCurrCode={setCurrencyCode}
                        setCurrValue={setCurrencyValue} />
                </Grid>
                <Grid item>
                    {isLoading ?
                        (isRateFetchError ?
                            <h5>An Error occured</h5> :
                            <Spinner />) :
                        <TargetCurrenciesCard
                            width={childWidth}
                            conversionRate={conversionRate}
                            baseValue={currencyValue} />}
                </Grid>
            </Grid>
        </Container>
    )
}

const Spinner = () => {
    return (<CircularProgress size={80} thickness={4} style={{ color: lightBlue[300], marginTop: 20 }} />)
}

export default Content;