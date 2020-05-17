import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import AdminContainer from 'containers/Admin/AdminContainer';
// import PetitionContainer from '../containers/Petition';

const Admin = () => {
  return (
    <>
      <PageTemplate url={'/admin'}>
        <AdminContainer/>
      </PageTemplate>
    </>
  );
};

export default Admin;