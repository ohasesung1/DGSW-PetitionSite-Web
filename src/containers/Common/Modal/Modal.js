import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import ModalComponent from 'components/Common/Modal';

const Modal = ({ store }) => {
  const { isModal, modalTitle, modalType, modalConfirmText, modalContents, confirmFunction, handleIsModal, width, height, fontSize } = store.dialog;
  return (
    <>
      <ModalComponent isModal={isModal} title={modalTitle} modalType={modalType} confirmText={modalConfirmText} confirmFunc={confirmFunction} closeFunc={handleIsModal} width={width} height={height} fontSize={fontSize}>
        {modalContents}
      </ModalComponent>
    </>
  );
};

Modal.propTypes = {
  store: PropTypes.any
};

export default inject('store')(observer(Modal));
