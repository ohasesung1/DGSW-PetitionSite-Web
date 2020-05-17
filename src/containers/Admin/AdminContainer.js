import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import GroupingState from 'lib/HookState/GroupingState';
import AdminTemplate from 'components/Admin/AdminTemplate/AdminTemplate';
import AdminItem from 'components/Admin/AdminItem/AdminItem';
import usePending from 'lib/HookState/usePending';
import { Prompt } from 'react-router';
import PropTypes from 'prop-types';

const AdminContainer = ({ store, history }) => {
  const { memberData, getOrderMember, authorizationStudent, deleteAuth, searchMember } = store.adminStore;

  const { modal } = store.dialog;

  const [memberList, setMemberList] = useState([]);

  const handleMemberInfo = async () => {
    await getOrderMember();
  };

  const handleSearchMember = async (searchWordData) => {
    if (searchWordData === '') {
      await getData();

      return;
    } 
    await searchMember(searchWordData);
    setMemberList(memberData.map((item, index) => <AdminItem key={index} item={item} addAuthToMember={addAuthToMember} deleteMemberAuth={deleteMemberAuth}/>));
  };

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

  const[isLoading, getData] = usePending(handleMemberInfo);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setMemberList(memberData.map((item, index) => <AdminItem key={index} item={item} addAuthToMember={addAuthToMember} deleteMemberAuth={deleteMemberAuth}/>));
  }, [memberData]);

  return (
    <AdminTemplate
      memberList={memberList}
      handleSearchMember={handleSearchMember}
    />
  );
};

AdminContainer.propTypes = {

};

export default inject('store')(observer(withRouter(AdminContainer)));