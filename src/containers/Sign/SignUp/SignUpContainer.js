import React, { useState } from 'react';
import SignUpTemplate from 'components/Sign/SignUpTemplate/SignUpTemplate';
import { inject, observer } from 'mobx-react';
import GroupingState from 'lib/HookState/GroupingState';

const SignUpContainer = ({ store }) => {
  const { handleSignUp } = store.sign;
  const { modal } = store.dialog;

  const [grade, setGrade] = useState(0);
  const [number, setNumber] = useState(0);
  const [studentClass, setStudentClass] = useState(0);

  const [name ,setName] = useState('');
  const [id ,setId] = useState('');
  const [pw, setPw] = useState('');

  const handleSigUpFuc = async () => {

  }; 

  return (
    <SignUpTemplate
      idObj={GroupingState('id', id, setId)}
      pwObj={GroupingState('pw', pw, setPw)}
      gradeObj={GroupingState('grade', grade, setGrade)}
      numberObj={GroupingState('number', number, setNumber)}
      studentClassObj={GroupingState('studentClass', studentClass, setStudentClass)}
    />
  );
};

export default inject('store')(observer(SignUpContainer));

