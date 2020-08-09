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

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.classes = this.props.classes
        this.state = {
            emailId: '',
            password: '',
            confirmPassword: '',
            error: false,
            errorMessage: '',
            shouldButtonDisable: true
        };
        this.emailIdHandler = this.emailIdHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.confirmPasswordHandler = this.confirmPasswordHandler.bind(this);
    }

    emailIdHandler(event) {
        event.preventDefault();
        const emailIdValue = event.target.value;
        this.setState({ emailId: emailIdValue })
    }

    passwordHandler(event) {
        event.preventDefault();
        const passwordValue = event.target.value;
        this.setState({ password: passwordValue })
    }

    confirmPasswordHandler(event) {
        event.preventDefault();
        const confirmPasswordValue = event.target.value;
        this.setState({ confirmPassword: confirmPasswordValue })
    }

    componentDidUpdate() {
        if (this.state.shouldButtonDisable) {
            if (this.state.emailId !== '' && this.state.password !== '' && this.state.confirmPassword !== '') {
                if (!this.state.error) {
                    if (this.state.password !== this.state.confirmPassword) {
                        this.setState({ error: true, errorMessage: 'Password Mismatch' })
                    }
                }
                else {
                    if (this.state.password === this.state.confirmPassword) {
                        this.setState({ error: false, errorMessage: '' })
                        this.setState({ shouldButtonDisable: false })
                    }
                }
            }
        } else {
            if (this.state.password !== this.state.confirmPassword) {
                this.setState({ error: true, errorMessage: 'Password Mismatch' })
                this.setState({ shouldButtonDisable: true })

            }
            if (this.state.emailId === '' || this.state.password === '' || this.state.confirmPassword === '') {
                this.setState({ shouldButtonDisable: true })
            }
        }
    }

    render() {
        return (
            <Grid container>
                <Grid item>
                    <Typography variant="h6">Set New Password</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl classes={{ root: this.classes.formControl }}>
                        <TextField
                            type="email"
                            label="Enter Email Id"
                            onChange={this.emailIdHandler}>
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl classes={{ root: this.classes.formControl }}>
                        <TextField
                            type="password"
                            label="Password"
                            onChange={this.passwordHandler}>
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl 
                        classes={{ root: this.classes.formControl }}>
                        <TextField
                            type="password"
                            label="Confirm Password"
                            error={this.state.error}
                            helperText={this.state.errorMessage}
                            onChange={this.confirmPasswordHandler}>
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        classes={{ root: this.classes.submitButton }}
                        disabled={this.state.shouldButtonDisable}
                        variant="contained"
                        color="secondary">
                        Submit
                    </Button>
                </Grid>
                <Grid item 
                    container style={{ marginTop: '20px' }} justify="space-evenly">
                    <Grid item>
                        <Link component={NavLink} to="/signIn">Sign In?</Link>
                    </Grid>
                    <Grid item>
                        <Link component={NavLink} to="/signUp">Sign Up?</Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default authBasicLayout(withStyles(styles)(ForgotPassword))