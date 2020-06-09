import React, { useEffect, useState } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import style from './PetitionTemplate.scss';
import { FiSearch } from 'react-icons/fi';

const cx = classNames.bind(style);

const PetitionTemplate = ({ 
    allowedPetitionsItem, 
    categoryPetitionsItem, 
    allowedPetitionIndexItemList, 
    categoryPetitionsIndexItemList, 
    category,
    handleCategory,
    handlePetitionType,
    type,
    handleSearchPetition,
    handleSearchCategoryPetition
  }) => {
    
  if (category === '') {
    category = '전체';
  };

  switch (type) {
    case 'allowed':
      type = '승인된';
      break;
    case 'not_allowed':
      type = '승인 대기 중인';
      break;
    case 'order':
      type = '최신 순';
      break;
    case 'vote_order':
      type = '투표 순';
      break;
    default:
      break;
  }

  const [title, setTitle] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('');

  const handleKeypressForTypePetition = (e) => {
    if (e.key === 'Enter') {
      handleSearchPetition(title);
    }
  };

  const handleKeyPressForCategory = (e) => {
    if (e.key === 'Enter') {
      handleSearchCategoryPetition(categoryTitle);
    }
  };

  return (
    <>
      <div className={cx('isAllowedSelectDiv')}>
        <div className={cx('isAllowedSelectDiv-allowedSelectDiv', { 'isAllowedSelectDiv-allowedSelectDiv-style': type === '최신 순' })} onClick={() => handlePetitionType('order')}>
          최신 순 청원 보기
        </div>
        <div className={cx('isAllowedSelectDiv-notAllowedSelectDiv', { 'isAllowedSelectDiv-notAllowedSelectDiv-style': type === '승인 대기 중인' })}  onClick={() => handlePetitionType('not_allowed')}>
          승인 대기 중인 청원 보기
        </div>
        <div className={cx('isAllowedSelectDiv-allowedSelectDiv', { 'isAllowedSelectDiv-orderPetitionSelectDiv-style': type === '승인된' })}  onClick={() => handlePetitionType('allowed')}>
          승인된 청원 보기
        </div>
        <div className={cx('isAllowedSelectDiv-orderPetitionSelectDiv', { 'isAllowedSelectDiv-orderPetitionSelectDiv-style': type === '투표 순' })}  onClick={() => handlePetitionType('vote_order')}>
          투표 순 청원 보기
        </div>  
      </div>
      <div className={cx('PetitionTemplate')}>
        <div className={cx('PetitionTemplate-header')}>
          <div className={cx('PetitionTemplate-header-title')}>
            <span>{type} 청원 목록</span>
            <div className={cx('PetitionTemplate-header-title-searchDiv')}>
              {
                type === '최신 순' ? 
                <>
                    <span>청원 검색:</span>
                    <input className={cx('PetitionTemplate-header-title-searchDiv-searchInput')} placeholder={'청원 제목'} value={title} onChange={(e) => { handleSearchPetition(e.target.value); setTitle(e.target.value)}} onKeyPress={(e) => handleKeypressForTypePetition(e)}/>
                    <div className={cx('PetitionTemplate-header-title-searchDiv-iconDiv')} onClick={() => handleSearchPetition(title)}>
                      <FiSearch className={cx('PetitionTemplate-header-title-searchDiv-iconDiv-icon')}/>
                    </div>
                </>
                : <></>
              }
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
              <span>참여 수</span>
            </div>
          </div>
        </div>
        {
          allowedPetitionsItem.length !== 0 ?
          allowedPetitionsItem
          : allowedPetitionsItem.length === 0 ?
            <div className={cx('notFoundPeition')}>
              청원 글이 없습니다.
            </div>
            :<></>
        }
      </div>
      <div className={cx('PetitionIndexItemTemplate')}>
        {allowedPetitionIndexItemList}
      </div>
      <div className={cx('CategoryTitile')}>
        <span>* 청원 분야별 보기</span>
      </div>
      <div className={cx('Category')}>
        <div className={cx('Category-CategoryRowOne')}>
          <div className={cx('Category-CategoryRowOne-contentsDiv', {'Category-CategoryRowOne-contentsDiv-contentsStyle': category === '전체'})} onClick={() => handleCategory('')}>
            <span>전체</span>
          </div>
          <div className={cx('Category-CategoryRowOne-contentsDiv',  {'Category-CategoryRowOne-contentsDiv-contentsStyle': category === '기숙사'})} onClick={() => handleCategory('기숙사')}>
            <span>기숙사</span>
          </div>
          <div className={cx('Category-CategoryRowOne-contentsDiv' ,  {'Category-CategoryRowOne-contentsDiv-contentsStyle': category === '운동회'})}  onClick={() => handleCategory('운동회')}>
            <span>운동회</span>
          </div>
          <div className={cx('Category-CategoryRowOne-contentsDiv',  {'Category-CategoryRowOne-contentsDiv-contentsStyle': category === '축제'})}  onClick={() => handleCategory('축제')}>
            <span>축제</span>
          </div>
          <div className={cx('Category-CategoryRowOne-contentsDiv',  {'Category-CategoryRowOne-contentsDiv-contentsStyle': category === '동아리'})}  onClick={() => handleCategory('동아리')}>
            <span>동아리</span>
          </div>
        </div>
        <div className={cx('Category-CategoryRowTwo')}>
          <div className={cx('Category-CategoryRowTwo-contentsDiv',  {'Category-CategoryRowTwo-contentsDiv-contentsStyle': category === '나르샤'})}  onClick={() => handleCategory('나르샤')}>
            <span>나르샤</span>
          </div>
          <div className={cx('Category-CategoryRowTwo-contentsDiv',  {'Category-CategoryRowTwo-contentsDiv-contentsStyle': category === '강의'})}  onClick={() => handleCategory('강의')}>
            <span>강의</span>
          </div>
          <div className={cx('Category-CategoryRowTwo-contentsDiv',  {'Category-CategoryRowTwo-contentsDiv-contentsStyle': category === '해커톤'})}  onClick={() => handleCategory('해커톤')}>
            <span>해커톤</span>
          </div>
          <div className={cx('Category-CategoryRowTwo-contentsDiv',  {'Category-CategoryRowTwo-contentsDiv-contentsStyle': category === '급식'})}  onClick={() => handleCategory('급식')}>
            <span>급식</span>
          </div>
          <div className={cx('Category-CategoryRowTwo-contentsDiv',  {'Category-CategoryRowTwo-contentsDiv-contentsStyle': category === '학생회'})}  onClick={() => handleCategory('학생회')}>
            <span>학생회</span>
          </div>
        </div>
      </div>
      <div className={cx('PetitionTemplate')}>
        <div className={cx('PetitionTemplate-header')}>
          <div className={cx('PetitionTemplate-header-title')}>
            <span>{category} 청원 목록</span>
            <div className={cx('PetitionTemplate-header-title-searchDiv')}>
            {
                category === '전체' ? 
                <>
                    <span>청원 검색:</span>
                    <input className={cx('PetitionTemplate-header-title-searchDiv-searchInput')} placeholder={'청원 제목'} value={categoryTitle} onChange={(e) => { handleSearchCategoryPetition(e.target.value); setCategoryTitle(e.target.value)}} onKeyPress={(e) => handleKeyPressForCategory(e)}/>
                    <div className={cx('PetitionTemplate-header-title-searchDiv-iconDiv')} onClick={() => handleSearchCategoryPetition(categoryTitle)}>
                      <FiSearch className={cx('PetitionTemplate-header-title-searchDiv-iconDiv-icon')}/>
                    </div>
                </>
                : <></>
              }
            </div>
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
            <span>참여 수</span>
            </div>
        </div>
        {
          categoryPetitionsItem.length !== 0 ?
            categoryPetitionsItem
            : categoryPetitionsItem.length === 0 ?
              <div className={cx('notFoundPeition')}>
                청원 글이 없습니다.
              </div>
              :<></>
        }
      </div>
      <div className={cx('PetitionIndexItemTemplate')}>
        {categoryPetitionsIndexItemList}
      </div>
    </>
  );
};

PetitionTemplate.propTypes = {
  allowedPetitionsItem: PropTypes.array,
  allPetitionsItem: PropTypes.array
};

export default PetitionTemplate;