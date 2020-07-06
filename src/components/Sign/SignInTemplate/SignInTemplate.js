import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './SignInTemplate.scss';

const cx = classnames.bind(style);

const SignInTemplate = ({ idObj, pwObj, userSignIn, isSesstionObj, guestLogin, setIsSignUp, setIsLogin }) => {

  const { id, setId } = idObj;
  const { pw, setPw } = pwObj;
  const { isSesstion, setIsSesstion } = isSesstionObj;

  const isCheckSesstion = () => {
    if (isSesstion) {
      setIsSesstion(false);
    } else {
      setIsSesstion(true);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      userSignIn();
    }
  };

  return (
    <div className={cx('SignInTemplate')}>
        <div className={cx('SignInTemplate-title')}>
          <span>학생회 청원 사이트</span>
        </div>
        <div className={cx('SignInTemplate-signInContentsBox')}>
          <div className={cx('SignInTemplate-signInContentsBox-idBox')}>
          </div>
          <div className={cx('SignInTemplate-signInContentsBox-checkBoxDiv')}>
            <span>로그인 유지</span>
            <input className={cx('SignInTemplate-signInContentsBox-checkBoxDiv-checkBox')}type={'checkbox'} value={isSesstion} onClick={() => isCheckSesstion()}/>
          </div>
        </div>
        <div className={cx('SignInTemplate-buttonBox')}>
          <div className={cx('SignInTemplate-buttonBox-loginButtonBox')}>
            <button className={cx('SignInTemplate-buttonBox-loginButtonBox-loginButton')} onClick={() => userSignIn()}>로그인</button>
          </div>
          <div className={cx('SignInTemplate-buttonBox-signUpButtonBox')}>
            <button className={cx('SignInTemplate-buttonBox-signUpButtonBox-signUpButton')} onClick={() => { setIsSignUp(true); setIsLogin(false)}}>회원가입</button>
          </div>
        </div>
        <div className={cx('SignInTemplate-guestButtonBox')}>
          <button className={cx('SignInTemplate-guestButtonBox-guestButton')} onClick={() => guestLogin()}>게스트 로그인</button>
        </div>
    </div>
  );
}

SignInTemplate.propTypes = {
  idObj: PropTypes.object,
  pwObj: PropTypes.object,
  isSesstionObj: PropTypes.object,
  userSignIn: PropTypes.func,
  isCheckSesstion: PropTypes.func,
  guestLogin: PropTypes.func
};

export default SignInTemplate;