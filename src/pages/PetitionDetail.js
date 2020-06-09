import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import PetitionDetailContainer from '../containers/PetitionDetailContainer/PetitionDetailContainer';


const PetitionDetail = () => {
  return (
    <>
      <PageTemplate url={'petition-detail'}>
        <PetitionDetailContainer/>
      </PageTemplate>
    </>
  );
};

export default PetitionDetail;