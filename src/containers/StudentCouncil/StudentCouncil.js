import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

const StudentCouncil = ({ store, history }) => {

  

  return (
    <div>
      
    </div>
  );
};

export default inject('store')(observer(withRouter(StudentCouncil)));

