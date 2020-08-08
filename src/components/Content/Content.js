import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import { Container, Grid } from '@material-ui/core';

import SourceCurrencyCard from '../SourceCurrencyCard/SourceCurrencyCard'
import TargetCurrenciesCard from '../TargetCurrenciesCard/TargetCurrenciesCard'


const Content = () => {
    const containerRef = useRef();
    const [childWidth, setChildWidth] = useState('0px');
    const timerId = useRef(null);

    const setWidthFunc = useCallback(() => {
        const wholeWidth = containerRef.current.offsetWidth;
        const leftPadding = parseInt(window.getComputedStyle(containerRef.current).getPropertyValue('padding-left'));
        const rightPadding = parseInt(window.getComputedStyle(containerRef.current).getPropertyValue('padding-right'));
        const netWidth = wholeWidth - leftPadding - rightPadding;
        if (netWidth >= 552) {
            if(childWidth!==552) setChildWidth(552 + 'px')
        } else {
            setChildWidth(netWidth + 'px')
        }
    }, [childWidth])

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

    return (
        <Container fixed ref={containerRef}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <SourceCurrencyCard width={childWidth} />
                </Grid>
                <Grid item>
                    <TargetCurrenciesCard width={childWidth} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Content;