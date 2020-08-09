import React from 'react';
import MainLayout from './components/MainLayout/MainLayout'
import LoginPage from './containers/LoginPage/LoginPage'
import SignUpPage from './containers/SignUpPage/SignUpPage'
import ForgotPassword from './containers/ForgotPassword/ForgotPassword'
import { Switch, Route, Redirect } from 'react-router-dom';

function App() { 
  return (
    <>
      <Switch>
        <Route exact path="/signIn" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/forgotPwd" component={ForgotPassword} />
        <Redirect to="/signIn" from="/" exact />
      </Switch>
      {/* <MainLayout /> */}
    </>
  );
}

export default App;
