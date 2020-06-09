import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import StudentCouncilTemplate from 'components/StudentCouncil/StudentCouncilTemplate';
import PetitionItem from 'components/Petition/PetitionItem/PetitionItem';
import PropTypes from 'prop-types';
import useStores from 'lib/HookState/useStore';
import IndexItem from 'components/Petition/IndexItem';
import usePending from 'lib/HookState/usePending';

const StudentCouncil = observer(({ history }) => {
  const { store } = useStores();

  const { 
    getStudentCouncilPetition,
    studentCouncilPetitions,
    studentCouncilPetitionsTotalpage, 
    handleStudentCouncilPage
  } = store.petitionStore;

  let { studentCouncilPetitionsPageIndex } = store.petitionStore;

  const [petitions, setPetitions] = useState([]);
  const [studentPetitionItemIndex, setStudentPetitionItemIndex] = useState([]);
  const [type, setType] = useState('waiting');

  const handleType = (typeValue) => {
    setType(typeValue);
  };

  const handleStudentCouncilPetition = async () => {
    await getStudentCouncilPetition(studentCouncilPetitionsPageIndex, 9, type);
  };

  useEffect(() => {
    if (studentCouncilPetitions) {
      setPetitions(studentCouncilPetitions.map((feed) => <PetitionItem key={feed.idx} item={feed} isStudent={1}/>))
    }
  }, [studentCouncilPetitions]);


  useEffect(() => {
    if (studentCouncilPetitionsTotalpage === 1 || !studentCouncilPetitionsTotalpage) {
      setStudentPetitionItemIndex(<IndexItem key={1} index={1}  itemIndex={1} handlePage={handleStudentCouncilPage}/>)
    } else {
      let itemList = [];
      for (let i = 1; i <= studentCouncilPetitionsTotalpage; i ++) {
        itemList.push(<IndexItem key={i} index={i} itemIndex={studentCouncilPetitionsPageIndex} handlePage={handleStudentCouncilPage}/>)
      }

      if (studentCouncilPetitionsTotalpage < studentCouncilPetitionsPageIndex) {
        itemList = [];
        
        studentCouncilPetitionsPageIndex = 1;

        for (let i = 1; i <= studentCouncilPetitionsTotalpage; i ++) {
          itemList.push(<IndexItem key={i} index={i} itemIndex={studentCouncilPetitionsPageIndex} handlePage={handleStudentCouncilPage}/>)
        }
      }

      setStudentPetitionItemIndex(itemList);
    }
  }, [studentCouncilPetitionsTotalpage, studentCouncilPetitionsPageIndex]);

  const [isLoading, getData] = usePending(handleStudentCouncilPetition);

  useEffect(() => {
    getData();
  }, [studentCouncilPetitionsPageIndex, type]);

  return (
    <StudentCouncilTemplate
      petitions={petitions}
      handleType={handleType}
      type={type}
      handleType={handleType}
      studentPetitionItemIndex={studentPetitionItemIndex}
    />
  );
});

// export default inject('store')(observer(withRouter(StudentCouncil)));
export default withRouter(StudentCouncil);

