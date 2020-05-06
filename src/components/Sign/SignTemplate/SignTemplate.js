import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './SignTemplate.scss';

const cx = classnames.bind(style);

const SignTemplate = ({ children }) => {
  return (
    <div className={cx('SignTemplate')}>
      <div className={cx('SignTemplate-SignInContentBox')}>
        {children}
      </div>
    </div>
  );
}

SignTemplate.propTypes = {

};

export default SignTemplate;