import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import SignTemplate from 'components/Sign/SignTemplate';
import SignInContainer from './SignIn/SignInContainer';
import SignUpContainer from './SignUp/SignUpContainer';
import PropTypes from 'prop-types';

const SignContainer = ({ store }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SignTemplate>
      {
        isLogin ? 
        <SignInContainer setIsSignUp={setIsSignUp} setIsLogin={setIsLogin}/>
        : <SignUpContainer setIsSignUp={setIsSignUp} setIsLogin={setIsLogin}/>
      }
      
    </SignTemplate>
  );
};

SignContainer.propTypes = {

};


export default inject('store')(observer(SignContainer));