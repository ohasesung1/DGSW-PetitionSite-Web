import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './AdminTemplate.scss';
import classNames from 'classnames';
import { FiSearch } from 'react-icons/fi';

const cx = classNames.bind(style);

const AdminTemplate = ({ memberList, handleSearchMember }) => {

  const [searchWord, setSearchWord] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchMember(searchWord);
    }
  };

  return (
    <>
      <div className={cx('AdminTemplate')}>
        <div className={cx('AdminTemplate-titleDiv')}>
          <span className={cx('AdminTemplate-titleDiv-title')}>학생 리스트</span>
          <span className={cx('AdminTemplate-titleDiv-description')}>학생 리스트 입니다. 학생회 권한을 부여 할 수 있습니다.</span>
          <div className={cx('AdminTemplate-titleDiv-searchDiv')}>
            <span>사용자 검색:</span>
            <input className={cx('AdminTemplate-titleDiv-searchDiv-searchInput')} placeholder={'ID 혹은 이름 검색'} value={searchWord} onChange={(e) => setSearchWord(e.target.value)} onKeyPress={(e) => handleKeyPress(e)}/>
            <div className={cx('AdminTemplate-titleDiv-searchDiv-iconDiv')} onClick={() =>  handleSearchMember(searchWord)}>
              <FiSearch className={cx('AdminTemplate-titleDiv-searchDiv-iconDiv-icon')}/>
            </div>
          </div>
        </div>
        <div className={cx('AdminTemplate-header')}>
          <div className={cx('AdminTemplate-header-category')}>
            <span>이름</span>
          </div>
          <div className={cx('AdminTemplate-header-category')}>
            <span>학반</span>
          </div>
          <div className={cx('AdminTemplate-header-category')}>
            <span>ID</span>
          </div>
          <div className={cx('AdminTemplate-header-category')}>
            <span>가입 날짜</span>
          </div>
          <div className={cx('AdminTemplate-header-authDiv')}>
            <span>권한</span>
          </div>          
        </div>
        <div className={cx('AdminTemplate-contentsDiv')}>
          {
            memberList.length === 0 ?
              <div className={cx('AdminTemplate-contentsDiv-notFoundDiv')}>학생 정보 없음</div>
            : memberList
          }
        </div>
      </div>
    </>
  )
};

AdminTemplate.propTypes = {
  memberList: PropTypes.array,
  handleSearchMember: PropTypes.func
};

export default AdminTemplate;