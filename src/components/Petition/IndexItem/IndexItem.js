import React, { useEffect } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import style from './IndexItem.scss';

const cx = classNames.bind(style);

const IndexItem = ({ index, itemIndex, handlePage }) => {
  // console.log(index, itemIndex);
  
  return (
    <div className={cx('IndexItemTemplate', { 'IndexItemTemplate-select': index === itemIndex})} onClick={() => handlePage(index)}>
      {index}
    </div>
  );
};

IndexItem.propTypes = {
  index: PropTypes.number,
  itemIndex: PropTypes.number,
  handlePage: PropTypes.func
}

export default IndexItem; 