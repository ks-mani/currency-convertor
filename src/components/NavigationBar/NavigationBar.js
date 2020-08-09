import React from 'react';
import { AppBar, Toolbar, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyle = makeStyles({
    buttonRoot: {
        textTransform: 'capitalize',
        fontWeight: 600
    }
})


const NavigationBar = (props) => {
    const classes = useStyle();
    const logoutHandler = ()=>{
        props.logout();
        props.history.pushState('/');
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container
                        justify="flex-end" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="body1">Welcome {props.name}!</Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="secondary"
                                classes={{ root: classes.buttonRoot }}
                                onClick={logoutHandler}>
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default withRouter(NavigationBar);