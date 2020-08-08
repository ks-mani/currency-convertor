import React from 'react';
import { AppBar, Toolbar, Button, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    buttonRoot: {
        textTransform: 'capitalize',
        fontWeight: 600
    }
})


const NavigationBar = (props) => {
    const classes = useStyle();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justify="flex-end" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="body1">Welcome Mani Kumar!</Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="secondary"
                                classes={{ root: classes.buttonRoot }}>Logout</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavigationBar;