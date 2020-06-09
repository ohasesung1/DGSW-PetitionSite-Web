import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import PetitionContainer from '../containers/Petition';

const Petition = () => {
  return (
    <>
      <PageTemplate url={'/'}>
        <PetitionContainer/>
      </PageTemplate>
    </>
  );
};

export default Petition;