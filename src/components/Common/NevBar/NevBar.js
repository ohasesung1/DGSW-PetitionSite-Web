import React, { useEffect, useState } from 'react';
import PropTypes  from 'prop-types';
import SecureLS from 'secure-ls';
import TokenVerification from 'lib/Token/TokenVerification';
import { inject, observer } from 'mobx-react';
import dgswLogo from 'assets/image/dgsw_logo.png';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import style from './NevBar.scss';

const cx = classNames.bind(style);

const NevBar = ({ url, store, history, isBackground }) => {
  const { modal } = store.dialog;
  const [isLogin, setIsLogin] = useState('');

  const token = TokenVerification();

  const ls = new SecureLS({ encodingType: 'aes' });

  const userInfo = ls.get('user-info');

  const handleUrl = (propUrl) => {
    if (propUrl === '/sign' && isLogin === '로그아웃') {
      localStorage.removeItem('petition-token');
      sessionStorage.removeItem('petition-token');

      const ls = new SecureLS({ encodingType: 'aes' });

      ls.removeAll();
    }
    if (propUrl === '/admin' && (token === 'empty' || userInfo.accessLevel === 2 || userInfo.accessLevel === 1)) {
      modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '접근 권한 없음! (관리자 계정으로 다시 시도 해주세요!)'
      });

      return;
    }

    if (propUrl === '/student-council' && (token === 'empty' || userInfo.accessLevel === 2)) {
      modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '접근 권한 없음! (관리자 계정으로 다시 시도 해주세요!)'
      });

      return;
    }

    if (propUrl === '/petition-write' && (token === 'empty')) {
      modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '로그인 후 이용 해주세요.'
      });

      return;
    }

    if (propUrl === history.location.pathname) {
      return;
    }

    history.push(propUrl);
  }

  const checkIsLogin = () => {
    if (token === 'empty') {
      setIsLogin('로그인');
    } else {
      setIsLogin('로그아웃');
    }
  }

  useEffect(() => {
    checkIsLogin();
  }, []);


  return (
    <div className={cx('NevBarTemplate', { 'CustomMargin': isBackground === true})}>
      <div className={cx('NevBarTemplate-mainButtonDiv')} onClick={() => handleUrl('/')}>
        <img className={cx('NevBarTemplate-mainButtonDiv-img')} src={dgswLogo}/>
      </div>
      <div className={cx('NevBarTemplate-pageButtonDiv')}>
        <div className={cx('NevBarTemplate-pageButtonDiv-buttonsDiv')}>
          <button className={cx('NevBarTemplate-pageButtonDiv-buttonsDiv-buttons')} onClick={() => handleUrl('/petition-write')}>청원하기</button>
        </div>
        <div className={cx('NevBarTemplate-pageButtonDiv-buttonsDiv')}>
          <button className={cx('NevBarTemplate-pageButtonDiv-buttonsDiv-buttons')} onClick={() => handleUrl('/admin')}>관리자</button>
        </div>
        <div className={cx('NevBarTemplate-pageButtonDiv-buttonsDiv')}>
          <button className={cx('NevBarTemplate-pageButtonDiv-buttonsDiv-buttons')} onClick={() => handleUrl('/student-council')}>학생회</button>
        </div>
      </div>
      <div className={cx('NevBarTemplate-loginButtonDiv')}>
        <button className={cx('NevBarTemplate-loginButtonDiv-buttons')} onClick={() => handleUrl('/sign')}>{isLogin}</button>
      </div>
    </div>
  );
};

NevBar.propTypes = {
  store: PropTypes.any,
  history: PropTypes.any
};

export default inject('store')(observer(withRouter(NevBar)));