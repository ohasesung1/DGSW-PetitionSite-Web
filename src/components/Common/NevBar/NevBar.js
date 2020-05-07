import React, { useEffect } from 'react';
import PropTypes  from 'prop-types';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import style from './NevBar.scss';

const cx = classNames.bind(style);

const NevBar = ({ url, store, history }) => {
  return (
    <div className={cx('NevBarTemplate')}>

    </div>
  );
};

NevBar.propTypes = {

};

export default inject('store')(observer(withRouter(NevBar)));