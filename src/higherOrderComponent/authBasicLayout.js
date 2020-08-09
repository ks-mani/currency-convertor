import React from 'react'
import { Grid, Container, Card, withStyles } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors';

const styles = {
    cardRoot: {
        backgroundColor: lightBlue[600]
    },
};


function authBasicLayout(WrappedComponent) {
    return withStyles(styles)(class extends React.Component {
        constructor(props) {
            super(props);
            this.classes = this.props.classes;
        }

        render() {
            return (
                <Container >
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <Card classes={{ root: this.classes.cardRoot }}>
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