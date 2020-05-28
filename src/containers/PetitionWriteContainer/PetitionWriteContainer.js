import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import PetitionWriteTemplate from 'components/PetitionWrite/PetitionWriteTemplate';
import { inject, observer } from 'mobx-react';
import GroupingState from 'lib/HookState/GroupingState';
import { Prompt } from 'react-router';
import PropTypes from 'prop-types';

const PetitionWriteContainer = ({ store, history }) => {
  const { writePetition } = store.petitionStore; // 청원 작성 서버 요청 함수
  const { modal } = store.dialog; // 모달

  // 제목, 내용, 카테고리 변수 선언
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [category, setCategory] = useState('선택 안됨');

    // Prompt 제어 state
    const [isConfirmed, setIsConfirmed] = useState(false);

  // 업로드 완료 후 페이지 이동을 위한 변수
  const [isUploadPetition, setIsUploadPetition] = useState(true);

  const useComponentDidMount = func => useEffect(func, []);

  const navigate = async (path) => {
    history.push(path);
  };

  const handleContentsLegnth = async (event) => {
    if (1000 < event.target.value.length) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '1000자 이내로 작성해 주세요.'
      });

      return;
    }

    setContents(event.target.value);
  };

  const handleTitleLength = async (event) => {
    if (50 < event.target.value.length) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '제목은 50자 이내로 작성해 주세요.'
      });

      return;
    }

    setTitle(event.target.value);
  };

  const handleBlockedNavigation = nextLocation => {
    if (!isConfirmed) {  
      modal({
        modalType: 'basic',
        title: 'Warning!',
        contents: '작성된 내용이 사라질 수 있습니다. 이동하시겠습니까?',
        confirmFunc: async () => {
          await setIsConfirmed(true);
          await navigate(nextLocation.pathname);
        }
      });

      return false;
    }

    return true;
  };


  // 청원 글 작성 함수
  const handleWritePetition = async () => {

    // 예외 처리
    if (title.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '제목을 입력해 주세요.'
      });

      return;
    } else if (contents.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '청원 내용을 입력해 주세요.'
      });

      return;
    } else if (category === '선택 안됨') {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '카테고리를 선택해 주세요.'
      });

      return;
    }
    
    // 데이터 설정
    let data = {
      title,
      contents,
      category
    };

    await writePetition(data)
      .then((response) => {
        modal({
          title: 'Success!',
          stateType: 'success',
          contents: '청원이 성공적으로 등록 되었습니다.',
          closeFunc: () => { 
            setIsUploadPetition(false);
            history.goBack(1); 
          }
        });
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 400) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '양식이 맞지 않아요!'
          });

          return;
        }

        if (status === 500) {
          modal({
            title: 'Error!',
            stateType: 'error',
            contents: '서버 에러! 조금만 기다려 주세요. (__)'
          });

          return;
        }
      });
  };

  const useComponentWillMount = func => {
    const willMount = useRef(true);
  
    if (willMount.current) {
      func();
    }
  
    useComponentDidMount(() => {
      willMount.current = false;
    });
  };

  useComponentWillMount(() => {
    if (handleBlockedNavigation) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = undefined;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {
        isUploadPetition
          ? <Prompt when={true} message={handleBlockedNavigation}/>
          : <></>
      }
    <PetitionWriteTemplate
      titleObj={GroupingState('title', title, setTitle)}
      contentsObj={GroupingState('contents', contents, setContents)}
      categoryObj={GroupingState('category', category, setCategory)}
      handleWritePetition={handleWritePetition}
      history={history}
      handleContentsLegnth={handleContentsLegnth}
      handleTitleLength={handleTitleLength}
    />
    </>
  );
};

export default inject('store')(observer(withRouter(PetitionWriteContainer)));