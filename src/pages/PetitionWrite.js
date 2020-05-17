import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import PetitionWriteContainer from '../containers/PetitionWriteContainer';


const PetitionWrite = () => {
  return (
    <>
      <PageTemplate url={'petition-write'}>
        <PetitionWriteContainer/>
      </PageTemplate>
    </>
  );
};

export default PetitionWrite;