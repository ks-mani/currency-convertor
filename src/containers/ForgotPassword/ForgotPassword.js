import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'

class ForgotPassword extends React.Component {
    render() {
        return (
            <p>ForgotPassword</p>
        )
    }
}

export default authBasicLayout(ForgotPassword)