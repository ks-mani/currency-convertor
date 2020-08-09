import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'
import { withStyles, Grid, FormControl, TextField, Button, Typography } from '@material-ui/core'

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
    constructor(props){
        super(props);
        this.classes = this.props.classes
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
                            label="Enter Email Id">
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button classes={{ root: this.classes.submitButton }} variant="contained" color="secondary">Submit</Button>
                </Grid>
            </Grid>
        )
    }
}

export default authBasicLayout(withStyles(styles)(ForgotPassword))