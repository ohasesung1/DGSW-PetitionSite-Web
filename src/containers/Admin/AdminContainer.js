import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import GroupingState from 'lib/HookState/GroupingState';
import { Prompt } from 'react-router';
import PropTypes from 'prop-types';

const AdminContainer = ({ store, history }) => {
  return (
    <div>

    </div>
  )
}

export default inject('store')(observer(withRouter(AdminContainer)));