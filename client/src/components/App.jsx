import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory} from 'react-router-dom'
import { agent } from '../api/agent';
import { LoginRegisterContainer } from '../containers/LoginRegisterContainer';
import { setUser } from '../redux/slices/user';
import { Login } from './Login';

export const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // get user if we have the token
    if (user.info.username === null && !!localStorage.token) {
      agent.userActions
        .getUser()
        .then((user) => {
          dispatch(setUser(user));
        });
    }
  }, [])

  return (

    <Router>

      {/* force token to be real */}
      {!localStorage.token ? <Redirect to="/login"></Redirect> : null}


      <Switch>
        <Route path="/login">
            <LoginRegisterContainer></LoginRegisterContainer>
        </Route>
        <Route path="/profile/:displayName">
          <div>hi {user.info.displayName}</div>
        </Route>
        <Route exact path="/">
          <div>home page</div>
        </Route>
        <Route>
          <div>This page does not exist</div>
        </Route>
      </Switch>
    </Router>
  );
}
