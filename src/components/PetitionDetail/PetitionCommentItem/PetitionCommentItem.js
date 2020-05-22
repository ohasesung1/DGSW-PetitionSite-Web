import React from 'react';
import PropTypes from 'prop-types';
import style from './PetitionCommentItem.scss';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';

const cx = classNames.bind(style);

const PetitionCommentItem = ({ item }) => {
  
  const { id, contents,joinDate } = item;

  let memberIdLength;

  if (id) {
    memberIdLength = id[0];
    for (let i = 1; i < id.length; i++) {
      memberIdLength += '*';
    };
  }

  const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');

  return (
    <div className={cx('PetitionCommentItemDiv')}>
      <div className={cx('PetitionCommentItemDiv-idDiv')}>
        <div className={cx('PetitionCommentItemDiv-idDiv-id')}>
          {memberIdLength}
        </div>
        <div className={cx('PetitionCommentItemDiv-idDiv-joinDate')}>
          {joinDateFormat}
        </div>
      </div>
      <div className={cx('PetitionCommentItemDiv-contentsDiv')}>
        <div className={cx('PetitionCommentItemDiv-contentsDiv-contents')}>
          {contents}
        </div>
      </div>
    </div>
  );
};

export default PetitionCommentItem;