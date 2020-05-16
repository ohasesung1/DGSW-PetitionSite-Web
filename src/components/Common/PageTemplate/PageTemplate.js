import React, { useEffect } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import NevBar from 'components/Common/NevBar';
import imageBackground from 'assets/image/backgroundImage2.jpg'; 
import Footer from 'components/Common/Footer';
import style from './PageTemplate.scss';

const cx = classNames.bind(style);

const PageTemplate = ({ url, children }) => {
  return (
    <div className={cx('PageTemplate')}>
      <div className={cx('PageTemplate-haederBackground')}>
        <img src={imageBackground} className={cx('PageTemplate-haederBackground-image')}/>
      </div>
      <div className={cx('PageTemplate-header')}>
        <NevBar/>
      </div>
      <div className={cx('PageTemplate-contents')}>
        {children}
      </div>
      <div className={cx('PageTemplate-bottom')}>
        <Footer/>
      </div>
    </div>
  );
};

PageTemplate.propTypes = {

};

export default withRouter(PageTemplate);