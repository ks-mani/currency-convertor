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
        this.state = {
            emailId: '',
            password: '',
            shouldButtonDisable: true
        };
        this.classes = this.props.classes
        this.emailIdHandler = this.emailIdHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
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

    componentDidUpdate() {
        if(this.state.shouldButtonDisable){
            if(this.state.emailId!=='' && this.state.password!==''){
                this.setState({shouldButtonDisable: false})
            }
        } else {
            if(this.state.emailId==='' || this.state.password===''){
                this.setState({shouldButtonDisable: true})
            }
        } 
    }

    render() {
        return (
            <Grid container>
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
                        disabled = {this.state.shouldButtonDisable}
                        variant="contained"
                        color="secondary">
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


export default authBasicLayout(withStyles(styles)(LoginPage))