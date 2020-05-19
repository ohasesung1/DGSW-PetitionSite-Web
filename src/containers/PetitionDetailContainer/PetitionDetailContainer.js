import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import usePending from 'lib/HookState/usePending';
import PetitionDetailTemplate from 'components/PetitionDetail/PetitionDetailTemplate';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const PetitionDetailContainer = ({ store, history }) => {
  const { getPetitionDetail, PetitionDetailData } = store.petitionStore;

  const [detailData, setDetailData] = useState({});

  const handlePetitionDetail = async () => {
    const idx = localStorage.getItem("petition-idx");

    await getPetitionDetail(idx);
  };

  const [isLoading, getData] = usePending(handlePetitionDetail);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDetailData(PetitionDetailData);
  }, [PetitionDetailData]);

  return (
    <PetitionDetailTemplate
      detailData={detailData}
    />
  );
};

PetitionDetailContainer.propTypes = {
  store: PropTypes.any,
  history: PropTypes.any
};

export default inject('store')(observer(withRouter(PetitionDetailContainer)));