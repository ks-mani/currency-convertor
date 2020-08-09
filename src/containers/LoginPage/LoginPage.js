import React from 'react'
import authBasicLayout from '../../higherOrderComponent/authBasicLayout'

class LoginPage extends React.Component {
    render() {
        return (
            <p>LoginPage</p>
        )
    }
}

export default authBasicLayout(LoginPage)