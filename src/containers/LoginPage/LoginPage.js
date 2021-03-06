import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'
import { FormControl, TextField, withStyles, Grid, Button, Typography, Link } from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


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
        this.state = {
            emailId: '',
            password: '',
            shouldButtonDisable: true
        };
        this.classes = this.props.classes
        this.emailIdHandler = this.emailIdHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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

    submitHandler(event) {
        let userData = JSON.parse(localStorage.getItem('data'));
        if (userData === null) {
            this.setState({ submitError: true, submitErrorMessage: 'User does not exist. Sign Up!' });
        }
        if (userData.findIndex(item => item.emailId === this.state.emailId && item.password === this.state.password) === -1) {
            this.setState({ submitError: true, submitErrorMessage: 'User does not exist. Sign Up!' });
        } else {
            const user = userData.find(item => item.emailId === this.state.emailId && item.password === this.state.password)
            this.props.login(user.id, user.firstName)
            this.props.history.push('/home')
        }
    }

    componentDidUpdate() {
        if (this.state.shouldButtonDisable) {
            if (this.state.emailId !== '' && this.state.password !== '') {
                this.setState({ shouldButtonDisable: false })
            }
        } else {
            if (this.state.emailId === '' || this.state.password === '') {
                this.setState({ shouldButtonDisable: true })
            }
        }
    }

    render() {
        return (
            <Grid container>
                {this.state.submitError ? (
                    <Grid item xs={12}>
                        <Typography variant="caption" color="error">{this.state.submitErrorMessage}</Typography>
                    </Grid>
                ) : null}
                <Grid item>
                    <Typography variant="h6">Sign In</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl
                        classes={{ root: this.classes.formControl }}>
                        <TextField
                            type="emailId"
                            label="Email Id"
                            onChange={this.emailIdHandler}>
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl
                        classes={{ root: this.classes.formControl }}>
                        <TextField
                            type="password"
                            label="Password"
                            onChange={this.passwordHandler}>
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        classes={{ root: this.classes.submitButton }}
                        disabled={this.state.shouldButtonDisable}
                        variant="contained"
                        color="secondary"
                        onClick={this.submitHandler}>
                        Submit
                    </Button>
                </Grid>
                <Grid item
                    container style={{ marginTop: '20px' }} justify="space-evenly">
                    <Grid item>
                        <Link component={NavLink} to="/signUp">Sign Up?</Link>
                    </Grid>
                    <Grid item>
                        <Link component={NavLink} to="/forgotPwd">Forgot Password?</Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (id, username) => dispatch({ type: 'LOGIN', activeId: id, activeUser: username }),
    }
}

export default authBasicLayout(withStyles(styles)(connect(null, mapDispatchToProps)(withRouter(LoginPage))))

