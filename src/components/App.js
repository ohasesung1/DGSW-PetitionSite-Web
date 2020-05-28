import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import Modal from 'containers/Common/Modal';

function App() {
  return (
    <>
      <Switch>
          <Route
            exact
            path='/sign'
            render={() => <Pages.Sign/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/'
            render={() => <Pages.Petition/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/petition-write'
            render={() => <Pages.PetitionWrite/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/admin'
            render={() => <Pages.Admin/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/petition-detail'
            render={() => <Pages.PetitionDetail/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/student-council'
            render={() => <Pages.StudentCouncil/>}
            />
      </Switch>
      <Modal />
    </>
  );
}

export default App;