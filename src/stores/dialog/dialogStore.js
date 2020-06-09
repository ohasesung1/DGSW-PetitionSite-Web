import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class dialogStore {
  // Modal Observable
  @observable isModal = false;
  @observable modalTitle = '';
  @observable modalType = 'basic';
  @observable modalConfirmText = '확인';
  @observable modalContents = null;
  @observable width = '450px';
  @observable height = '200px';
  @observable fontSize = 'default';
  @observable confirmFunction = function () {};
  @observable closeFunction = function () {};

  // Alert Observable
  @observable isAlert = false;
  @observable alertType = 'basic';
  @observable alertContents = '';

  // Modal Actions
  @action
  handleIsModal () {
    this.isModal = false;
    this.closeFunction();
  }
  
  @action
  handleConfirmModal () {
    this.isModal = false;
    this.confirmFunction();
  }

  @action
  modal ({ title, stateType, confirmText, contents, confirmFunc, closeFunc, width, height, fontSize }) {
    this.isModal = true;
    this.modalTitle = title;
    this.modalType = stateType;
    this.modalConfirmText = confirmText;
    this.modalContents = contents;
    if (width) this.width = width;
    if (height) this.height = height;
    if (fontSize) this.fontSize = fontSize;
    this.confirmFunction = function () {
      if (confirmFunc) confirmFunc();
    };
    this.closeFunction = function () {
      if (closeFunc) closeFunc();
    };
  }
}

export default dialogStore;