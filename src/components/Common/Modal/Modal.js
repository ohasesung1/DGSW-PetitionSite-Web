import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { MdDone, MdError, MdWarning, MdInfoOutline } from 'react-icons/md';
import style from './Modal.scss';
import { typography } from 'styles/typography/typography_scheme.js';
import Button from 'components/Common/Button';

const { size } = typography;
const cx = classNames.bind(style);

const Modal = ({
  isModal,
  title,
  modalType,
  confirmText,
  confirmFunc,
  closeFunc,
  width,
  height,
  fontSize,
  children
}) => {
  return (
    <>
      <div className={cx('Modal-overlay', {'Modal-hidden': !isModal})} />
      <div className={cx('Modal', {'Modal-hidden': !isModal})} style={{ width, height }}>
        <div className={cx('Modal-header')}>
          <MdDone className={cx('Modal-header-success', {'Modal-header-hidden': modalType !== 'success'})} />
          <MdError className={cx('Modal-header-error', {'Modal-header-hidden': modalType !== 'error'})} />
          <MdWarning className={cx('Modal-header-warning', {'Modal-header-hidden': modalType !== 'warning'})} />
          <MdInfoOutline className={cx('Modal-header-info', {'Modal-header-hidden': modalType !== 'info'})} />
          <span className={cx('Modal-header-title', { 'Modal-fs-title-small': fontSize === 'small' })}>{title}</span>
        </div>
        <div className={cx('Modal-contents', { 'Modal-fs-contents-small': fontSize === 'small' })}>
          { children }
        </div>
        <div className={cx('Modal-buttons')}>
          {
            modalType !== 'basic' ?
              <Button customStyle={{ width: '15%', height: '60%', margin: '0 3% 0 0', fontSize: size.s2 }} appearance={'primary'} handleFunction={() => {
                closeFunc();
              }}>
                {'확인'}
              </Button> :
              <>
                <Button customStyle={{ width: '15%', height: '60%', margin: '0 2% 0 0', fontSize: size.s2 }} appearance={'outline'} handleFunction={async () => {
                  await confirmFunc();
                  closeFunc();
                }}>
                  {confirmText}
                </Button>
                <Button customStyle={{ width: '15%', height: '60%', margin: '0 3% 0 0', fontSize: size.s2 }} appearance={'outlineRed'} handleFunction={() => {
                  closeFunc();
                }}>
                  {'취소'}
                </Button>
              </>
          }
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  isModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  modalType: PropTypes.oneOf([
    'basic',
    'success',
    'error',
    'info',
    'warning'
  ]),
  confirmText: PropTypes.string,
  confirmFunc: PropTypes.func,
  closeFunc: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.oneOf([
    'default',
    'small'
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ])
};

Modal.defaultProps = {
  isModal: false,
  title: '',
  modalType: 'basic',
  confirmText: '확인',
  confirmFunc: () => {},
  closeFunc: () => {},
  width: '450px',
  height: '200px',
  fontSize: 'default',
  children: ''
};

export default Modal;
