import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'
import { FormControl, TextField, withStyles, Grid, Button, Typography, Link } from '@material-ui/core'
import { NavLink } from 'react-router-dom';


const styles = {
    formControl: {
        width: '100%',
        marginBottom: 20
    },
    submitButton: {
        width: '100%',
        textTransform: 'capitalize',
        fontWeight: 'bold'
    }
};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.classes = this.props.classes
    }

    render() {
        return (
            <Grid container>
                <Grid item>
                    <Typography variant="h6">Sign In</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl classes={{ root: this.classes.formControl }}>
                        <TextField
                            label="Username">
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl classes={{ root: this.classes.formControl }}>
                        <TextField
                            type="password"
                            label="Password">
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button classes={{ root: this.classes.submitButton }} variant="contained" color="secondary">Submit</Button>
                </Grid>
                <Grid item container style={{marginTop: '20px'}} justify="space-evenly">
                    <Grid item justify="center">
                        <Link component={NavLink} to="/signUp">Sign Up?</Link>
                    </Grid>
                    <Grid item justify="center">
                        <Link component={NavLink} to="/forgotPwd">Forgot Password?</Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default authBasicLayout(withStyles(styles)(LoginPage))