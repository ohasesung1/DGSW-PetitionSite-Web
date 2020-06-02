import React from 'react';
import style from './SignUpTemplate.scss';
import classNames from 'classnames';

const cx = classNames.bind(style);

const SignUpTemplate = ({  }) => {
  return (
    <div className={cx('SignUpTemplate')}>
      <div className={cx('SignUpTemplate-studentInfoDiv')}>
        <div className={cx('SignUpTemplate-studentInfoDiv-gradeDiv')}>
          <select  className={cx('SignUpTemplate-studentInfoDiv-gradeDiv-selectBox')}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className={cx('SignUpTemplate-studentInfoDiv-studentClassDiv')}>

        </div>
        <div className={cx('SignUpTemplate-studentInfoDiv-numberDiv')}>

        </div>
      </div>
      <div className={cx('SignUpTemplate-userIdDiv')}>
        <div className={cx('SignUpTemplate-userIdDiv-inputDiv')}>
          <input className={cx('SignUpTemplate-userIdDiv-inputDiv-input')}/>
        </div>
        <div className={cx('SignUpTemplate-userIdDiv-buttonDiv')}>
          <button className={cx('SignUpTemplate-userIdDiv-buttonDiv-button')}>ID 중복 체크</button>
        </div>
      </div>
      <div className={cx('SignUpTemplate-userPwDiv')}>

      </div>
    </div>
  );
};

export default SignUpTemplate;