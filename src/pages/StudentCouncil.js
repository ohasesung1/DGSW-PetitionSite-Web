import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import StudentCouncilContainer from 'containers/StudentCouncil/StudentCouncil';

const StudentCouncil = () => {
  return (
    <>
      <PageTemplate url={'/StudentCouncil'}>
        <StudentCouncilContainer/>
      </PageTemplate>
    </>
  );
};

export default StudentCouncil;