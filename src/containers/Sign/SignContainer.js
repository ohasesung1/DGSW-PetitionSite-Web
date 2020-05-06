import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import SignTemplate from 'components/Sign/SignTemplate';
import SignInContainer from './SignIn/SignInContainer';
import PropTypes from 'prop-types';

const SignContainer = ({ store }) => {
  return (
    <SignTemplate>
      <SignInContainer/>
    </SignTemplate>
  );
};

SignContainer.propTypes = {

};


export default inject('store')(observer(SignContainer));