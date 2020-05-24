import React from 'react';
import PropTypes from 'prop-types';
import style from './PetitionItem.scss';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';

const cx = classNames.bind(style);

const PetitionItem = ({ item, history }) => {
  // 데이터 가져오기
  let { category, joinDate, title, commentCount, idx } = item;

  // 동의 댓글이 없을 경우 0 처리
  if (!commentCount) {
    commentCount = 0;
  }

  const handlePetitionDetail = async () => {
    localStorage.setItem("petition-idx", idx);
    
    history.push('/petition-detail');
  };

  // 데이트 포맷
  const joinDateFormat = moment(joinDate).format('YYYY.MM.DD');
  
  return (
    <div className={cx('petitionItem')} onClick={() => handlePetitionDetail(idx)}>
      <div className={cx('petitionItem-category')}>
        <span>{category}</span>
      </div>
      <div className={cx('petitionItem-title')}>
        <span>{title}</span>
      </div>
      <div className={cx('petitionItem-date')}>
        <span>{joinDateFormat}</span>
      </div>
      <div className={cx('petitionItem-voteCount')}>
        <span>{commentCount}</span>
      </div>
    </div>
  )
};

PetitionItem.propTypes = {
  item: PropTypes.object,
};

export default withRouter(PetitionItem);