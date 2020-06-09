import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './PetitionItem.scss';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';

const cx = classNames.bind(style);

const PetitionItem = ({ item, history, isStudent }) => {
  // 데이터 가져오기
  let { category, joinDate, title, voteCount, idx, blind } = item;

  const [isBlind, setIsBlind] = useState(false);

  // 동의 댓글이 없을 경우 0 처리
  if (!voteCount) {
    voteCount = 0;
  }

  const handlePetitionDetail = async () => {
    localStorage.setItem("petition-idx", idx);
    
    history.push('/petition-detail');
  };

  // 데이트 포맷
  const joinDateFormat = moment(joinDate).format('YYYY.MM.DD');

  useEffect(() => {
    if (blind === 1) {
      setIsBlind(true);
    }
  }, []);
  
  return (
    <>
    {
      isBlind && !isStudent?
      <></>
      :  <div className={cx('petitionItem')} onClick={() => handlePetitionDetail(idx)}>
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
        <span>{voteCount}</span>
      </div>
    </div>
    }
    </>
  )
};

PetitionItem.propTypes = {
  item: PropTypes.object,
};

export default withRouter(PetitionItem);