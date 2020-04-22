import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';

function App() {
  return (
    <>
      <Switch>
          <Route
            exact
            path='/'
            render={() => <Pages.Sign/>}
            />
      </Switch>
    </>
  );
}

export default App;