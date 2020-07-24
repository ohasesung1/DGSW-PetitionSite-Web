import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import AdminTemplate from 'components/Admin/AdminTemplate/AdminTemplate';
import AdminItemContainer from 'containers/Admin/AdminItemContainer';
import usePending from 'lib/HookState/usePending';
import PropTypes from 'prop-types';

const AdminContainer = ({ store, history }) => {
  const { memberData, getOrderMember, searchMember } = store.adminStore;

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
    setMemberList(memberData.map((item, index) => <AdminItemContainer 
      key={index}
      item={item}/>
    ));
  };

  const[isLoading, getData] = usePending(handleMemberInfo);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setMemberList(memberData.map((item, index) => <AdminItemContainer key={index} item={item}/>));
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