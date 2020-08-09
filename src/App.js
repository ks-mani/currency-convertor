import React from 'react';
import MainLayout from './components/MainLayout/MainLayout'
import LoginPage from './containers/LoginPage/LoginPage'
import SignUpPage from './containers/SignUpPage/SignUpPage'
import ForgotPassword from './containers/ForgotPassword/ForgotPassword'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {

  const routesOne = (
    <Switch>
      <Route exact path="/signIn" component={LoginPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/forgotPwd" component={ForgotPassword} />
      <Redirect to="/signIn" from="/" exact />
      <Redirect to="/signIn" from="*" exact />
    </Switch>
  )
  const routesTwo = (
    <Switch>
      <Route exact path="/signIn" component={LoginPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/forgotPwd" component={ForgotPassword} />
      <Route path="/home" component={MainLayout} />
      <Redirect to="/home" from="/" exact />
    </Switch>
  )

  return (
    <>
      {(props.activeId!=='')?routesTwo:routesOne};
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
    activeUser: state.activeUser
  }
}

export default connect(mapStateToProps, null)(App);