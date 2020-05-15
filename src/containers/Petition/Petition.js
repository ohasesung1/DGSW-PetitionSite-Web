import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import PetitionTemplate from 'components/Petition/PetitionTemplate';
import PetitionItem from 'components/Petition/PetitionItem';
import IndexItem from 'components/Petition/IndexItem';
import usePending from 'lib/HookState/usePending';
import PropTypes from 'prop-types';

const Petition = ({ store }) => {
  // 서버 데이터 함수 or 변수
  const { 
    getPetitionFeed, 
    getAllPetitionFeed,
    allPetitions, 
    allowedPetitions,
    allowedPetitionTotalPage,
    allowedPetitionPageIndex,
    allPetitionTotalPage,
  } = store.petitionStore;
  
  // 전체 청원 목록
  const [allPetitionsItem, setAllPetitionsItem] = useState([]);
  // 승인된 청원 목록
  const [allowedPetitionsItem, setAllowedPetitionsItem] = useState([]);
  // 페이지 네이션 인덱스 아이템 리스트
  const [indexItemList, setIndexItemList] = useState([]);

  // 승인된 청원 목록 스토어 함수 호출 
  const handlePetitionFeed = async () => {
    await getAllPetitionFeed(1, 10);
    await getPetitionFeed(allowedPetitionPageIndex, 10);
  };

  // 페이지 로딩 구현
  const [isLoading, getData] = usePending(handlePetitionFeed);

  // 스토어 함수 실행
  useEffect(() => {
    getData();
  }, [allowedPetitionPageIndex]);

  // 스토어 변수를 통해 item 저장
  useEffect(() => {
    setAllPetitionsItem(allPetitions.map((feed) => <PetitionItem key={feed.idx} item={feed}/>));
  }, [allPetitions]);

  // 스토어 변수를 통해 item 저장
  useEffect(() => {
    setAllowedPetitionsItem(allowedPetitions.map((feed) => <PetitionItem key={feed.idx} item={feed}/>));
  }, [allowedPetitions]);

  useEffect(() => {
      if (allowedPetitionTotalPage === 1) {
        setIndexItemList(<IndexItem key={1} index={1} itemIndex={1}/>);
      } else {
        let itemList = [];
        for (let i = 1; i <= allowedPetitionTotalPage; i ++) {
          itemList.push(<IndexItem key={i} index={i} itemIndex={allowedPetitionPageIndex}/>)
        }
        console.log(itemList);
        
        setIndexItemList(itemList);
      }
  }, [allowedPetitionTotalPage, allowedPetitionPageIndex]);

  return (
    <PetitionTemplate
      allowedPetitionsItem={allowedPetitionsItem}
      allPetitionsItem={allPetitionsItem}
      indexItemList={indexItemList}
    />
  );
};

Petition.propTypes = {
  store: PropTypes.any
};

export default inject('store')(observer(Petition));