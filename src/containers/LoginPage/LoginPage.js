import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'
import { FormControl, TextField, withStyles, Grid, Button, Typography } from '@material-ui/core'


const styles = {
    formControl: {
        width: '100%',
        marginBottom: 20
    },
    submitButton: {
        width:'100%',
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
                    <FormControl classes={{root: this.classes.formControl}}>
                        <TextField                            
                            label="Username">
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl classes={{root: this.classes.formControl}}>
                        <TextField
                            type="password"                            
                            label="Password">
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button classes={{root: this.classes.submitButton}} variant="contained" color="secondary">Submit</Button>
                </Grid>
            </Grid>
        )
    }
}


export default authBasicLayout(withStyles(styles)(LoginPage))