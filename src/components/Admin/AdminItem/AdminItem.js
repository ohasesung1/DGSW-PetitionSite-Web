import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './AdminItem.scss';
import moment from 'moment';
import classNames from 'classnames';

const cx = classNames.bind(style);

const AdminItem = ({ item, addAuthToMember, deleteMemberAuth, isDeleteAuth,isSetDeleteAuth }) => {

  const { id, grade, studentClass, number, name, joinDate, accessLevel } = item;

  const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');

  useEffect(() => {
    if (accessLevel === 0 || accessLevel === 1) {
      isSetDeleteAuth(true);
    };
  }, []);
  
  return (
    <div className={cx('AdminItemTemplate')}>
      <div className={cx('AdminItemTemplate-categoryDiv')}>
        <span>{name}</span>
      </div>
      <div className={cx('AdminItemTemplate-categoryDiv')}>
        <span>{grade}학년 {studentClass}반 {number}번</span>
      </div>
      <div className={cx('AdminItemTemplate-categoryDiv')}>
        <span>{id}</span>
      </div>
      <div className={cx('AdminItemTemplate-categoryDiv')}>
        <span>{joinDateFormat}</span>
      </div>
      <div className={cx('AdminItemTemplate-authDiv')}>
        <div className={cx('AdminItemTemplate-authDiv-buttonDiv')}>
           {
             isDeleteAuth ? 
              <button className={cx('AdminItemTemplate-authDiv-buttonDiv-deleteButton')} onClick={() => deleteMemberAuth(id)}>학생회 권한 삭제</button>
              : <button className={cx('AdminItemTemplate-authDiv-buttonDiv-AddButton')} onClick={() => addAuthToMember(id)}>학생회 추가</button>
           }
        </div>
      </div>
    </div>
  )
};

AdminItem.propTypes = {

};

export default AdminItem;