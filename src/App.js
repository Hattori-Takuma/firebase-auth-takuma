import React from 'react';
import {
  BrowserRouter as Router,
  Route, useHistory
} from "react-router-dom";

import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Main from './pages/Main';

const App = () => {

  const history = useHistory()


  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/Main" exact component={Main} />
          <Route path="/CreateUser" exact component={CreateUser} />
        </div>
      </Router>
    </div>
  );
};

export default App;
