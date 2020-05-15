import React, { useEffect } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import style from './IndexItem.scss';

const cx = classNames.bind(style);

const IndexItem = ({ index, itemIndex }) => {

  return (
    <div className={cx('IndexItemTemplate')}>
      {index}
    </div>
  );
};

IndexItem.propTypes = {
  index: PropTypes.number,
  itemIndex: PropTypes.number
}

export default IndexItem; 