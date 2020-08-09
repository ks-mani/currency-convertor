import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'
import { withStyles, Grid, FormControl, TextField, Button, Typography, Link } from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const styles = {
    formControl: {
        width: '100%',
        margin: '10px 0 30px 0'
    },
    submitButton: {
        width: '100%',
        textTransform: 'capitalize',
        fontWeight: 'bold'
    }
};

const registrationTemplate = {
    data: [
        { id: 0, code: 'firstName', label: 'First Name', type: 'text' },
        { id: 1, code: 'lastName', label: 'Last Name', type: 'text' },
        { id: 2, code: 'emailId', label: 'Email Id', type: 'email' },
        { id: 3, code: 'password', label: 'Password', type: 'password' },
        { id: 4, code: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    ]
}

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.classes = this.props.classes
    }
    render() {
        return (
            <Grid container>
                <Grid item>
                    <Typography variant="h6">Sign Up</Typography>
                </Grid>
                {
                    registrationTemplate.data.map(regItem => (
                        <Grid item xs={12} key={regItem.code}>
                            <FormControl classes={{ root: this.classes.formControl }}>
                                <TextField
                                    type={regItem.type}
                                    label={regItem.label}>
                                </TextField>
                            </FormControl>
                        </Grid>
                    ))
                }
                <Grid item xs={12}>
                    <Button classes={{ root: this.classes.submitButton }} variant="contained" color="secondary">Submit</Button>
                </Grid>
                <Grid item container style={{marginTop: '20px'}} justify="space-evenly">
                    <Grid item justify="center">
                        <Link component={NavLink} to="/signIn">Sign In?</Link>
                    </Grid>
                    <Grid item justify="center">
                        <Link component={NavLink} to="/forgotPwd">Forgot Password?</Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default authBasicLayout(withStyles(styles)(SignUpPage))