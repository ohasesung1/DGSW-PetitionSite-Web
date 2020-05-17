import React, { useEffect, useState } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import NevBar from 'components/Common/NevBar';
import imageBackground from 'assets/image/backgroundImage2.jpg'; 
import Footer from 'components/Common/Footer';
import style from './PageTemplate.scss';

const cx = classNames.bind(style);

const PageTemplate = ({ url, children }) => {

  const [isBackground, setIsBackground] = useState(true);
  const [isFooter, setIsFooter] = useState(true);

  useEffect(() => {
    if (url === '/admin') {
      setIsBackground(false);
      setIsFooter(false);
    }
  }, []);

  return (
    <div className={cx('PageTemplate')}>
      {
        isBackground ?
        <div className={cx('PageTemplate-haederBackground')}>
          <img src={imageBackground} className={cx('PageTemplate-haederBackground-image')}/>
        </div>
        : <></>
      }
      <div className={cx('PageTemplate-header')}>
        <NevBar isBackground={isBackground}/>
      </div>
      <div className={cx('PageTemplate-contents')}>
        {children}
      </div>
      {
        isFooter ? 
        <div className={cx('PageTemplate-bottom')}>
          <Footer/>
        </div>
        : <></>
      }
    </div>
  );
};

PageTemplate.propTypes = {
  url: PropTypes.string,
  children: PropTypes.object
};

export default withRouter(PageTemplate);