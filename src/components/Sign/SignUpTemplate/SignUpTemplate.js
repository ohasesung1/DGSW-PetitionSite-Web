import React from 'react';
import style from './SignUpTemplate.scss';
import classNames from 'classnames';

const cx = classNames.bind(style);

const SignUpTemplate = ({ 
  idObj,
    pwObj,
    gradeObj,
    numberObj,
    studentClassObj,
    idCheck,
    checkPwObj,
    nameObj,
    handleSignUpFunc,
    setIsSignUp,
    setIsLogin
  }) => {

  const { grade, setGrade } = gradeObj;
  const { number, setNumber } = numberObj;
  const { studentClass, setStudentClass } = studentClassObj;
  const { id, setId } = idObj;
  const { pw, setPw } = pwObj;
  const { checkPw, setCheckPw } = checkPwObj;
  const { name, setName } = nameObj;

  const handleStduentNumber = (e) => {
    e.target.value= e.target.value.replace(/[^0-9]/g,'');

    setNumber(e.target.value);
  };

  return (
    <div className={cx('SignUpTemplate')}>
      <div className={cx('SignUpTemplate-studentInfoDiv')}>
        <span>학년</span>
        <div className={cx('SignUpTemplate-studentInfoDiv-gradeDiv')}>
          <select  className={cx('SignUpTemplate-studentInfoDiv-gradeDiv-selectBox')} value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <span>학반</span>
        <div className={cx('SignUpTemplate-studentInfoDiv-studentClassDiv')}>
          <select  className={cx('SignUpTemplate-studentInfoDiv-studentClassDiv-selectBox')} value={studentClass} onChange={(e) => setStudentClass(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
        </div>
        <span>번호</span>
        <div className={cx('SignUpTemplate-studentInfoDiv-numberDiv')}>
            <input className={cx('SignUpTemplate-studentInfoDiv-numberDiv-numberInput')} type={"text"} onChange={(e) => { handleStduentNumber(e) }}/>
        </div>
      </div>
      <div className={cx('SignUpTemplate-userIdDiv')}>
        <div className={cx('SignUpTemplate-userIdDiv-inputDiv')}>
          <input className={cx('SignUpTemplate-userIdDiv-inputDiv-input')} value={id} onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className={cx('SignUpTemplate-userIdDiv-buttonDiv')}>
          <button className={cx('SignUpTemplate-userIdDiv-buttonDiv-button')} onClick={() => idCheck()}>ID 중복 체크</button>
        </div>
      </div>
      <div className={cx('SignUpTemplate-nameInfoDiv')}>
      <span>이름</span>
        <div className={cx('SignUpTemplate-nameInfoDiv-inputDiv')}>
          <input className={cx('SignUpTemplate-nameInfoDiv-inputDiv-input')} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
      </div>
      <div className={cx('SignUpTemplate-userPwDiv')}>
        <div className={cx('SignUpTemplate-userPwDiv-pwDiv')}>
        <span>비밀번호</span>
          <div>
            <input className={cx('SignUpTemplate-userPwDiv-pwDiv-input')} type={'password'} value={pw} onChange={(e) => setPw(e.target.value)}/>
          </div>
        </div>
        <div  className={cx('SignUpTemplate-pwGuide')}>
          <span>*비밀번호: 알파벳,숫자,특수문자 가능 7~20글자</span>
        </div>
        <div className={cx('SignUpTemplate-userPwDiv-checkPwDiv')}>
          <span>비밀번호 확인</span>
          <div>
            <input className={cx('SignUpTemplate-userPwDiv-checkPwDiv-input')} type={'password'} value={checkPw} onChange={(e) => setCheckPw(e.target.value)}/>
          </div>
        </div>
        <div className={cx('SignUpTemplate-registerButtonDiv')}>
          <button className={cx('SignUpTemplate-registerButtonDiv-button')} onClick={() => {setIsLogin(true); setIsSignUp(false)}}>로그인<br/> 하러 가기</button>
          <button className={cx('SignUpTemplate-registerButtonDiv-button')} onClick={() => handleSignUpFunc()}>회원 가입</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpTemplate;