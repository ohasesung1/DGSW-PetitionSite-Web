import React, { useEffect } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import style from './PetitionTemplate.scss';

const cx = classNames.bind(style);

const PetitionTemplate = ({ allowedPetitionsItem, allPetitionsItem, allowedPetitionIndexItemList, allPetitionsIndexItemList }) => {
  
  return (
    <>
      <div className={cx('PetitionTemplate')}>
        <div className={cx('PetitionTemplate-header')}>
          <div className={cx('PetitionTemplate-header-title')}>
            <span>승인된 청원 목록</span>
          </div>
          <div className={cx('PetitionTemplate-header-kinds')}>
            <div className={cx('PetitionTemplate-header-kinds-category')}>
              <span>분류</span>
            </div>
            <div className={cx('PetitionTemplate-header-kinds-title')}>
              <span>제목</span>
            </div>
            <div className={cx('PetitionTemplate-header-kinds-date')}>
              <span>청원 날짜</span>
            </div>
            <div className={cx('PetitionTemplate-header-kinds-voteCount')}>
              <span>투표수</span>
            </div>
          </div>
        </div>
        {allowedPetitionsItem}
      </div>
      <div className={cx('PetitionIndexItemTemplate')}>
        {allowedPetitionIndexItemList}
      </div>
      <div className={cx('PetitionTemplate')}>
        <div className={cx('PetitionTemplate-header')}>
          <div className={cx('PetitionTemplate-header-title')}>
            <span>전체 청원 목록</span>
          </div>
        </div>
        <div className={cx('PetitionTemplate-header-kinds')}>
            <div className={cx('PetitionTemplate-header-kinds-category')}>
              <span>분류</span>
            </div>
            <div className={cx('PetitionTemplate-header-kinds-title')}>
            <span>제목</span>
            </div>
            <div className={cx('PetitionTemplate-header-kinds-date')}>
            <span>청원 날짜</span>
            </div>
            <div className={cx('PetitionTemplate-header-kinds-voteCount')}>
            <span>투표수</span>
            </div>
        </div>
        {allPetitionsItem}
      </div>
      <div className={cx('PetitionIndexItemTemplate')}>
        {allPetitionsIndexItemList}
      </div>
    </>
  );
};

PetitionTemplate.propTypes = {
  allowedPetitionsItem: PropTypes.array,
  allPetitionsItem: PropTypes.array
};

export default PetitionTemplate;