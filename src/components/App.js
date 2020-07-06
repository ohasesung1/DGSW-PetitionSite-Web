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
            path='/DGSW-PetitionSite-Web/sign'
            render={() => <Pages.Sign/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/DGSW-PetitionSite-Web'
            render={() => <Pages.Petition/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/DGSW-PetitionSite-Web/petition-write'
            render={() => <Pages.PetitionWrite/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/DGSW-PetitionSite-Web/admin'
            render={() => <Pages.Admin/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/DGSW-PetitionSite-Web/petition-detail'
            render={() => <Pages.PetitionDetail/>}
            />
      </Switch>
      <Switch>
          <Route
            exact
            path='/DGSW-PetitionSite-Web/student-council'
            render={() => <Pages.StudentCouncil/>}
            />
      </Switch>
      <Modal />
    </>
  );
}

export default App;