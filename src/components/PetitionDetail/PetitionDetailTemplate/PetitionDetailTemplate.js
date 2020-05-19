import React, { useEffect, useState } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import style from './PetitionDetailTemplate.scss';
import { BsFillCircleFill } from 'react-icons/bs';

const cx = classNames.bind(style);

const PetitionDetailTemplate = ({ detailData }) => {

  const { title, contents, category, joinDate, id, blind, comment } = detailData;
  let { isAllowed } = detailData;

  const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');
  let memberIdLength;
  let commentLength;
  
  if (isAllowed === 0) {
    isAllowed = '승인 대기 중';
  } else if (isAllowed === 1) {
    isAllowed = '승인 완료';
  }
  if (id) {
    memberIdLength = id[0];
    for (let i = 1; i < id.length; i++) {
      memberIdLength += '*';
    };
  }

  if (comment) {
    commentLength = comment.length;
  }
  
  return (
    <div className={cx('PetitionDetailTemplate')}>
      <div className={cx('PetitionDetailTemplate-contentsDiv')}>
        <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv')}>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-guideDiv')}>
            <span>- 청원 {isAllowed} -</span>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-title')}>
            <span>{title}</span>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-voteDiv')}>
            <span>참여 인원: [ </span><span className={cx('categoryColor')}>{commentLength}</span> <span>명 ]</span>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv')}>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>카테고리: {category}</span>
            </div>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>청원 등록일: {joinDateFormat}</span>
            </div>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>청원 처리 상태: {isAllowed}</span>
            </div>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>청원인: {memberIdLength}</span>
            </div>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv')}>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph')}>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start')}>
                <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv')}>
                  <BsFillCircleFill className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv-icon')}/>
                </div>
                <span>청원 시작</span>
              </div>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start')}>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv')}>
                  <BsFillCircleFill className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv-icon', {'statusColor': isAllowed === '승인 대기 중'})}/>
                </div>
                <span>승인 대기 중</span>
              </div>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start')}>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv')}>
                  <BsFillCircleFill className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv-icon', {'statusColor': isAllowed === '승인 완료'})}/>
                </div>
                <span>승인 완료</span>
              </div>
            </div>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-contentsTitleDiv')}>
            <span>청원 내용</span>
          </div>
        </div>
        <div className={cx('PetitionDetailTemplate-contentsDiv-contentsBox')}>
          {contents}
        </div>
      </div>
      <div className={cx('PetitionDetailTemplate-bannerDiv')}> 

      </div>
    </div>
  );
};

PetitionDetailTemplate.propTypes = {

};

export default PetitionDetailTemplate;