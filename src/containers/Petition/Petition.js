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
    handleAllowedPage,
    allPetitionTotalPage,
    allPetitionPageIndex,
    handleAllPage,
  } = store.petitionStore;
  
  // 전체 청원 목록
  const [allPetitionsItem, setAllPetitionsItem] = useState([]);
  // 전체 청원 페이지네이션 인덱스 아이템 리스트
  const [allPetitionsIndexItemList, setAllPetitionsIndexItemList] = useState([]);
  // 승인된 청원 목록
  const [allowedPetitionsItem, setAllowedPetitionsItem] = useState([]);
  // 승인된 청원 페이지 네이션 인덱스 아이템 리스트
  const [allowedPetitionIndexItemList, setAllowedPetitionIndexItemList] = useState([]);

  // 승인된 청원 목록 스토어 함수 호출 
  const handlePetitionFeed = async () => {
    await getAllPetitionFeed(allPetitionPageIndex, 9);
    await getPetitionFeed(allowedPetitionPageIndex, 9);
  };

  // 페이지 로딩 구현
  const [isLoading, getData] = usePending(handlePetitionFeed);

  // 스토어 함수 실행
  useEffect(() => {
    getData();
  }, [allowedPetitionPageIndex, allPetitionPageIndex]);

  // 스토어 변수를 통해 item 저장
  useEffect(() => {
    setAllPetitionsItem(allPetitions.map((feed) => <PetitionItem key={feed.idx} item={feed}/>));
  }, [allPetitions]);

  // 스토어 변수를 통해 item 저장
  useEffect(() => {
    setAllowedPetitionsItem(allowedPetitions.map((feed) => <PetitionItem key={feed.idx} item={feed}/>));
  }, [allowedPetitions]);

  // 승인된 청원 목록 페이지네이션 저장
  useEffect(() => {
      if (allowedPetitionTotalPage === 1) { // 전체 페이지 크기가 1인 경우 인덱스 1로 설정 
        setAllowedPetitionIndexItemList(<IndexItem key={1} index={1} itemIndex={1} handlePage={handleAllowedPage}/>);
      } else {
        let itemList = []; // 전체 페이지 크기가 1보다 클 경우 인덱스를 크기 만큼 설정
        for (let i = 1; i <= allowedPetitionTotalPage; i ++) {
          itemList.push(<IndexItem key={i} index={i} itemIndex={allowedPetitionPageIndex} handlePage={handleAllowedPage}/>)
        }
        setAllowedPetitionIndexItemList(itemList);
      }
  }, [allowedPetitionTotalPage, allowedPetitionPageIndex]);

  // 전체 청원 목록 페이지네이션 저장 
  useEffect(() => {
    if (allPetitionTotalPage === 1) {
      setAllPetitionsIndexItemList(<IndexItem key={1} index={1} itemIndex={1} handlePage={handleAllPage}/>);
    } else {
      let itemList = [];
      for (let i = 1; i <= allPetitionTotalPage; i ++) {
        itemList.push(<IndexItem key={i} index={i} itemIndex={allPetitionPageIndex} handlePage={handleAllPage}/>)
      }
      setAllPetitionsIndexItemList(itemList);
    }
}, [allPetitionTotalPage, allPetitionPageIndex]);

  return (
    <PetitionTemplate
      allowedPetitionsItem={allowedPetitionsItem}
      allPetitionsItem={allPetitionsItem}
      allowedPetitionIndexItemList={allowedPetitionIndexItemList}
      allPetitionsIndexItemList={allPetitionsIndexItemList}
    />
  );
};

Petition.propTypes = {
  store: PropTypes.any
};

export default inject('store')(observer(Petition));