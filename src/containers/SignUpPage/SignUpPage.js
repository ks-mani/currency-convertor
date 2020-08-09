import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'

class SignUpPage extends React.Component {
    render() {
        return (
            <p>SignUpPage</p>
        )
    }
}

export default authBasicLayout(SignUpPage)