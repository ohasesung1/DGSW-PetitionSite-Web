import React from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import moment from 'moment';
import style from './SideAllowedPetitionItem.scss';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(style);

const SideAllowedPetitionItem = ({ item, count, history }) => {
  
  const { idx, title, joinDate } = item;
  
  const handlePetitionDetail = async () => {
    localStorage.setItem("petition-idx", idx);
    // history.push('/');
    history.push('/petition-detail');
  };

  const joinDateFormat = moment(joinDate).format('MM-DD');
  
  return (
    <div className={cx('SideAllowedPetitionItem')} onClick={() => handlePetitionDetail()}>
      <div className={cx('SideAllowedPetitionItem-countDiv')}>
        <span>{count + 1}.</span>
      </div>
      <div className={cx('SideAllowedPetitionItem-titleDiv')}>
        {title}
      </div>
    </div>
  );
};

SideAllowedPetitionItem.propTypes = {
  item: PropTypes.object,
  count: PropTypes.number,
  history: PropTypes.object
};

export default withRouter(SideAllowedPetitionItem);
