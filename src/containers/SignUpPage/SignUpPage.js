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
        this.classes = this.props.classes;
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            error: false,
            errorMessage: '',
            shouldButtonDisable: true,
            handlers: {
                firstName: this.firstNameHandler.bind(this),
                lastName: this.lastNameHandler.bind(this),
                emailId: this.emailHandler.bind(this),
                password: this.passwordHandler.bind(this),
                confirmPassword: this.confirmPasswordHandler.bind(this)
            }
        };
    }

    firstNameHandler(event) {
        event.preventDefault();
        const firstnameValue = event.target.value;
        this.setState({ firstName: firstnameValue })
    }
    lastNameHandler(event) {
        event.preventDefault();
        const lastnameValue = event.target.value;
        this.setState({ lastName: lastnameValue })
    }

    emailHandler(event) {
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
            if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.emailId !== '' && this.state.password !== '' && this.state.confirmPassword !== '') {
                if (!this.state.error) {
                    if (this.state.password !== this.state.confirmPassword) {
                        this.setState({ error: true, errorMessage: 'Password Mismatch' })
                    }
                }
                else {
                    if (this.state.password === this.state.confirmPassword) {
                        this.setState({ error: false, errorMessage: '', shouldButtonDisable: false })
                    }
                }
            }
        } else {
            if (this.state.password !== this.state.confirmPassword) {
                this.setState({ error: true, errorMessage: 'Password Mismatch' })
                this.setState({ shouldButtonDisable: true })

            }
            if (this.state.firstName === '' || this.state.lastName === '' || this.state.emailId === '' || this.state.password === '' || this.state.confirmPassword === '') {
                this.setState({ shouldButtonDisable: true })
            }
        }
    }

    render() {
        return (
            <Grid container>
                <Grid item>
                    <Typography variant="h6">Sign Up</Typography>
                </Grid>
                {
                    registrationTemplate.data.map(regItem => {
                        if (regItem.code === 'confirmPassword') {
                            return (
                                <Grid item xs={12} key={regItem.code}>
                                    <FormControl 
                                        classes={{ root: this.classes.formControl }}>
                                        <TextField
                                            type={regItem.type}
                                            label={regItem.label}
                                            error={this.state.error}
                                            helperText={this.state.errorMessage}
                                            onChange={this.state.handlers[regItem.code]}>
                                        </TextField>
                                    </FormControl>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid item xs={12} key={regItem.code}>
                                    <FormControl 
                                        classes={{ root: this.classes.formControl }}>
                                        <TextField
                                            type={regItem.type}
                                            label={regItem.label}
                                            onChange={this.state.handlers[regItem.code]}>
                                        </TextField>
                                    </FormControl>
                                </Grid>
                            )
                        }
                    })
                }
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
                        <Link component={NavLink} to="/forgotPwd">Forgot Password?</Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default authBasicLayout(withStyles(styles)(SignUpPage))