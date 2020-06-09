import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import SignInTemplate from 'components/Sign/SignInTemplate';
import GroupingState from 'lib/HookState/GroupingState';
import SecureLS from 'secure-ls';
import PropTypes from 'prop-types';
import sha512 from 'js-sha512';

const SignInContainer = ({ store, history, setIsSignUp, setIsLogin }) => {
  const { handleSignIn } = store.sign;
  const { modal } = store.dialog;

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isSesstion, setIsSesstion] = useState(false);

  const guestLogin = async () => {
    localStorage.removeItem('petition-token');
    sessionStorage.removeItem('petition-token');

    const ls = new SecureLS({ encodingType: 'aes' });

    ls.removeAll();
    history.push('/');
    return;
  }
  
  const userSignIn = async () => {
    
    if (id.length === 0 || pw.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '빈칸을 채워 주세요!'
      });

      return;
    }

    let data = {
      id,
      pw: sha512(pw)
    };

    await handleSignIn(data).
      then(async (response) => {
        if (isSesstion) {
          localStorage.setItem('petition-token', response.data.tokenData);
        } else {
          sessionStorage.setItem('petition-token',response.data.tokenData);
        }

        const ls = new SecureLS({ encodingType: 'aes' }); // user info 저장
        ls.set('user-info', response.data.member);  // user-info라는 이름으로 저장

        history.push('/');
      })
      .catch(async (error) => {
        const { status } = error.response;
        if (status === 403) {
          await modal({
            title: 'Warning!',
            stateType: 'warning',
            contents: '아이디 혹은 패스워드가 틀렸습니다.'
          });
    
          return;
        } else  if (status === 400) {
          await modal({
            title: 'Warning!',
            stateType: 'warning',
            contents: '양식이 맞지 않습니다.'
          });
    
          return;
        }  else if (status === 500) {
          await modal({
            title: 'Error!',
            stateType: 'error',
            contents: '서버 에러!'
          });
    
          return;
        }
        
      });
  }

  return (
    <SignInTemplate
    idObj={GroupingState('id', id, setId)}
    pwObj={GroupingState('pw', pw, setPw)}
    isSesstionObj={GroupingState('isSesstion', isSesstion, setIsSesstion)}
    userSignIn={userSignIn}
    guestLogin={guestLogin}
    setIsSignUp={setIsSignUp}
    setIsLogin={setIsLogin}
    />
  );
};

SignInContainer.propTypes = {
  idObj: PropTypes.object,
  pwObj: PropTypes.object,
  isSesstionObj: PropTypes.object,
  userSignIn: PropTypes.func,
  guestLogin: PropTypes.func
};


export default inject('store')(observer(withRouter(SignInContainer)));