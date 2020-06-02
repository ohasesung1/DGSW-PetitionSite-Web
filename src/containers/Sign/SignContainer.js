import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import SignTemplate from 'components/Sign/SignTemplate';
import SignInContainer from './SignIn/SignInContainer';
import SignUpContainer from './SignUp/SignUpContainer';
import PropTypes from 'prop-types';

const SignContainer = ({ store }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <SignTemplate>
      {
        isLogin ? 
        <SignInContainer/>
        : <SignUpContainer/>
      }
      
    </SignTemplate>
  );
};

SignContainer.propTypes = {

};


export default inject('store')(observer(SignContainer));