import React from 'react'
import { Grid, Container, Card, withStyles } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors';

const styles = {
    cardRoot: {
        borderBottom: '20px solid '+lightBlue[600],
        padding: 30
    },
    containerRoot: {
        marginTop: 30
    }
};


function authBasicLayout(WrappedComponent) {
    return withStyles(styles)(class extends React.Component {
        constructor(props) {
            super(props);
            this.classes = this.props.classes;
        }

        render() {
            return (
                <Container classes={{root: this.classes.containerRoot}}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <Card classes={{ root: this.classes.cardRoot }} raised>
                                <WrappedComponent />
                            </Card>
                        </Grid>
                    </Grid>
                </Container >
            )
        }
    })
}

export default authBasicLayout;