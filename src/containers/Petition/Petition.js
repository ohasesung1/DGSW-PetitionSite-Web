import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import PetitionTemplate from 'components/Petition/PetitionTemplate';
import PetitionItem from 'components/Petition/PetitionItem';
import IndexItem from 'components/Petition/IndexItem';
import usePending from 'lib/HookState/usePending';
import PropTypes from 'prop-types';

const Petition = ({ store, history }) => {
  // 서버 데이터 함수 or 변수
  const { 
    getPetitionFeed, 
    getPetitionFeedByCategory,
    categoryPetitions, 
    allowedPetitions,
    allowedPetitionTotalPage,
    handleAllowedPage,
    categoryPetitionTotalPage,
    handleAllPage,
    searchPetition,
    searchCategoryPetition
  } = store.petitionStore;

  let { allowedPetitionPageIndex, categoryPetitionPageIndex } = store.petitionStore;
  
  // 전체 청원 목록
  const [categoryPetitionsItem, setCategoryPetitionsItem] = useState([]);
  // 전체 청원 페이지네이션 인덱스 아이템 리스트
  const [categoryPetitionsIndexItemList, setcategoryPetitionsIndexItemList] = useState([]);
  // 승인된 청원 목록
  const [allowedPetitionsItem, setAllowedPetitionsItem] = useState([]);
  // 승인된 청원 페이지 네이션 인덱스 아이템 리스트
  const [allowedPetitionIndexItemList, setAllowedPetitionIndexItemList] = useState([]);

  // 승인, 승인 안된, 투표 순서 별 조회를 위한 변수
  const [type, setType] = useState('order');

  // 카테고리 변경 감지 변수
  const [isCheckChangeCategory, setIsCheckChangeCategory] = useState(false);

  // 타입 변경 감지 변수
  const [isCheckChangeType, setIsCheckChangeType] = useState(false);

  // 카테고리 변수
  const [category, setCategory] = useState('');

  const handleSearchCategoryPetition = async (title) => {
    if (title === '') {
      getDataSecond();

      return;
    }

    await searchCategoryPetition(title, categoryPetitionPageIndex, 9)
  };

  // 타입별 청원 조회 용 검색 조회 함수
  const handleSearchPetition = async (title) => {
    if (title === '') {
      getData();

      return;
    }
    await searchPetition(title, allowedPetitionPageIndex, 9);
  };

  // 카테고리 변경시 저장
  const handleCategory = async (categoryData) => {
    setIsCheckChangeCategory(true);
    await setCategory(categoryData);
  };

  // 청원 타입 변경시 저장
  const handlePetitionType = (typeData) => {
    setIsCheckChangeType(true);
    setType(typeData);
  };

  // 승인된 청원 목록 스토어 함수 호출 
  const handlePetitionFeed = async () => {
    await getPetitionFeed(allowedPetitionPageIndex, 9, type);
  };
  // 전체 청원 목록 스토어 함수 호출 
  const handlePetitionFeedSecond = async () => {
    await getPetitionFeedByCategory(categoryPetitionPageIndex, 9, category);
  };

  // 페이지 로딩 구현
  const [isLoading, getData] = usePending(handlePetitionFeed);
  // 페이지 로딩 구현
  const [isLoadingSecond, getDataSecond] = usePending(handlePetitionFeedSecond);

  // 스토어 함수 실행
  useEffect(() => {
    // 타입이 변경 되었으면 pageIndex 초기화
    if (isCheckChangeType) {
      allowedPetitionPageIndex = 1;
      getData();
      setIsCheckChangeType(false);
    } else {
      getData();
    }
  }, [allowedPetitionPageIndex, type]);

  // 스토어 함수 실행
  useEffect(() => {
    // 카테고리가 변경 되었으면 pageIndex 초기화
    if (isCheckChangeCategory) {
      categoryPetitionPageIndex = 1;
      getDataSecond();
      setIsCheckChangeCategory(false);
    } else {
      getDataSecond();
    }
  }, [categoryPetitionPageIndex, category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 스토어 변수를 통해 item 저장
  useEffect(() => {
    setCategoryPetitionsItem(categoryPetitions.map((feed) => <PetitionItem key={feed.idx} item={feed}/>));
  }, [categoryPetitions]);

  // 스토어 변수를 통해 item 저장
  useEffect(() => {
    if (allowedPetitions) {      
      setAllowedPetitionsItem(allowedPetitions.map((feed) => <PetitionItem key={feed.idx} item={feed}/>));
    }
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

        if (allowedPetitionTotalPage < allowedPetitionPageIndex) {
          itemList = [];
          
          allowedPetitionPageIndex = 1;

          for (let i = 1; i <= allowedPetitionTotalPage; i ++) {
            itemList.push(<IndexItem key={i} index={i} itemIndex={allowedPetitionPageIndex} handlePage={handleAllowedPage}/>)
          }
        }

        setAllowedPetitionIndexItemList(itemList);
      }
  }, [allowedPetitionTotalPage, allowedPetitionPageIndex]);

  // 카테고리 별 청원 목록 페이지네이션 저장 
  useEffect(() => {
    if (categoryPetitionTotalPage === 1) {
      setcategoryPetitionsIndexItemList(<IndexItem key={1} index={1} itemIndex={1} handlePage={handleAllPage}/>);
    } else {
      let itemList = [];
      for (let i = 1; i <= categoryPetitionTotalPage; i ++) {
        itemList.push(<IndexItem key={i} index={i} itemIndex={categoryPetitionPageIndex} handlePage={handleAllPage}/>)
      }

      if (categoryPetitionTotalPage < categoryPetitionPageIndex) {
        itemList = [];
        
        categoryPetitionPageIndex = 1;

        for (let i = 1; i <= allowedPetitionTotalPage; i ++) {
          itemList.push(<IndexItem key={i} index={i} itemIndex={categoryPetitionPageIndex} handlePage={handleAllPage}/>)
        }
      }
      setcategoryPetitionsIndexItemList(itemList);
    }
}, [categoryPetitionTotalPage, categoryPetitionPageIndex]);

  return (
    <PetitionTemplate
      allowedPetitionsItem={allowedPetitionsItem}
      categoryPetitionsItem={categoryPetitionsItem}
      allowedPetitionIndexItemList={allowedPetitionIndexItemList}
      categoryPetitionsIndexItemList={categoryPetitionsIndexItemList}
      category={category}
      handleCategory={handleCategory}
      handlePetitionType={handlePetitionType}
      type={type}
      handleSearchPetition={handleSearchPetition}
      handleSearchCategoryPetition={handleSearchCategoryPetition}
    />
  );
};

Petition.propTypes = {
  store: PropTypes.any
};

export default inject('store')(observer(Petition));