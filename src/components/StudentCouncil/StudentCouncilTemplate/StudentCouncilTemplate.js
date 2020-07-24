import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './StudentCouncilTemplate.scss';
import { FiSearch } from 'react-icons/fi';

const cx = classNames.bind(style);

const StudentCouncilTemplate = ({ petitions, type, handleType, studentPetitionItemIndex }) => {

  if (type === 'waiting') {
    type = '투표율 60%';
  } else if (type === 'blind') {
    type = '블라인드 처리된';
  }
  
  return (
    <>
    <div className={cx('StudentCouncilTemplate')}>
      <div className={cx('StudentCouncilTemplate-header')}>
        <div className={cx('StudentCouncilTemplate-header-title')}>
          <span>{type} 청원 보기</span>
          <div className={cx('StudentCouncilTemplate-header-title-categoryDiv')}>
              {
                <>
                    <div className={cx('StudentCouncilTemplate-header-title-categoryDiv-buttonDiv')}>
                      <button className={cx('StudentCouncilTemplate-header-title-categoryDiv-buttonDiv-NotAllowButton', { 'selectButtonStyle': type === '투표율 60%' })} onClick={() => handleType('waiting')}>승인 <br/>검토 중 청원</button>
                      <button className={cx('StudentCouncilTemplate-header-title-categoryDiv-buttonDiv-blindButton', { 'selectButtonStyle': type === '블라인드 처리된' })} onClick={() => handleType('blind')}>블라인드<br/> 처리 된 청원</button>
                    </div>
                </>
              }
            </div>
        </div>
        <div className={cx('StudentCouncilTemplate-header-kinds')}>
            <div className={cx('StudentCouncilTemplate-header-kinds-category')}>
              <span>분류</span>
            </div>
            <div className={cx('StudentCouncilTemplate-header-kinds-title')}>
              <span>제목</span>
            </div>
            <div className={cx('StudentCouncilTemplate-header-kinds-date')}>
              <span>청원 날짜</span>
            </div>
            <div className={cx('StudentCouncilTemplate-header-kinds-voteCount')}>
              <span>참여 수</span>
            </div>
          </div>
      </div>
        {
          petitions.length !== 0 ? 
            petitions 
          : <div className={cx('notFoundPeition')}>청원이 없습니다.</div>
        }
    </div>
    <div className={cx('ItemIndexListTemplate')}>
      {studentPetitionItemIndex}
    </div>
    </>
  )
};

StudentCouncilTemplate.propTypes = {
  petitions: PropTypes.array,
  type: PropTypes.string,
  handleType: PropTypes.func
};

export default StudentCouncilTemplate;