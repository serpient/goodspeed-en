import React from 'react';
import './App.scss';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './homePage/index';

const App = (props) => {
  const locationHistory = useHistory();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage {...props} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
