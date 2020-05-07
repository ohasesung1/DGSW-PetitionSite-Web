import React, { useEffect } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import NevBar from 'components/Common/NevBar';
import style from './PageTemplate.scss';

const cx = classNames.bind(style);

const PageTemplate = ({ url, children }) => {
  return (
    <div className={cx('PageTemplate')}>
      <div className={cx('PageTemplate-header')}>
        <NevBar/>
      </div>
    </div>
  );
};

PageTemplate.propTypes = {

};

export default withRouter(PageTemplate);