import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { Login } from './Login';

export const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log(!!localStorage.token);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/profile/:displayName">
          <div>hi {user.info.displayName}</div>
        </Route>
        <Route exact path="/">
          <div>home page</div>
        </Route>
      </Switch>
    </Router>
  );
}
