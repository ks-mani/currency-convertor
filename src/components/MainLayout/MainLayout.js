import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar.js'
import Content from '../Content/Content'
import { connect } from 'react-redux';

const MainLayout = (props) => {
    return (
        <>
            <NavigationBar name={props.activeUser} logout={props.logout} />
            <Content />
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        activeId: state.activeId,
        activeUser: state.activeUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: 'LOGOUT', activeId: '', activeUser: '' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
