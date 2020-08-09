import React from 'react';
import MainLayout from './components/MainLayout/MainLayout'
import LoginPage from './containers/LoginPage/LoginPage'
import SignUpPage from './containers/SignUpPage/SignUpPage'
import ForgotPassword from './containers/ForgotPassword/ForgotPassword'

function App() {
  return (
    <>
      {/* <LoginPage></LoginPage> */}
      <SignUpPage></SignUpPage>
      {/* <ForgotPassword></ForgotPassword> */}
      {/* <MainLayout /> */}
    </>
  );
}

export default App;
