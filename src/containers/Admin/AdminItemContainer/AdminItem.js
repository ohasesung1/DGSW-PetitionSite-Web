import React, { useState } from 'react';
import AdminItem from 'components/Admin/AdminItem';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

const AdminItemContainer = ({ store, index, item }) => {

  const { modal } = store.dialog;

  const { authorizationStudent, deleteAuth } = store.adminStore;
    
  const [isDeleteAuth, isSetDeleteAuth] = useState(false);

  const deleteMemberAuth = async (id) => {
    let data = {
      id,
    };

    await deleteAuth(data)
      .then(response => {
        modal({
          title: 'Success!',
          stateType: 'success',
          contents: '학생회 권한 삭제 완료.'
        });

        isSetDeleteAuth(false);
      })
      .catch(error => {
        const { status } = error.response;

        if (status === 400) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '양식이 맞지 않아요!'
          });

          return;
        }

        if (status === 403) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '권한 없음!'
          });

          return;
        }

        if (status === 500) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '서버 에러! 조금만 기다려 주세요. (__)'
          });

          return;
        }
      });
  };

  const addAuthToMember = async (id) => {
    let data = {
      id,
    };

    await authorizationStudent(data)
      .then(response => {
        modal({
          title: 'Success!',
          stateType: 'success',
          contents: '학생회 권한 추가 완료.'
        });

        isSetDeleteAuth(true);
      })
      .catch(error => {
        const { status } = error.response;

        if (status === 400) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '양식이 맞지 않아요!'
          });

          return;
        }

        if (status === 403) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '권한 없음!'
          });

          return;
        }

        if (status === 500) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '서버 에러! 조금만 기다려 주세요. (__)'
          });

          return;
        }
      });
  };


  return (
    <AdminItem
      key={index}
      item={item}
      isDeleteAuth={isDeleteAuth}
      isSetDeleteAuth={isSetDeleteAuth}
      addAuthToMember={addAuthToMember}
      deleteMemberAuth={deleteMemberAuth}
    />
  );
};

export default inject('store')(observer(withRouter(AdminItemContainer)));