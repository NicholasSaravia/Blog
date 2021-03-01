import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { agent } from '../api/agent';
import { LoginRegisterContainer } from '../containers/LoginRegisterContainer';
import { Profile } from '../containers/Profile';
import { setUser } from '../redux/slices/user';
import { Loading } from './Loading';
import { Navbar } from './Navbar';

export const App = () => {
  const user = useSelector(state => state.user.info);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    if (user.username === null && !!localStorage.token) {
      agent.userActions
        .getUser()
        .then((user) => {
          dispatch(setUser(user));
        }).then(() => {
          setLoading(false);
        })
    }else{
      setLoading(false);
    }
  }, []);

  const routes = (
    <Switch>
      <Route path="/login">
        {user.username == null ? (
          <LoginRegisterContainer></LoginRegisterContainer>
        ) : (
          <Redirect to={{ pathname: "/profile/nick" }}></Redirect>
        )}
      </Route>
      <Route path="/profile/:displayName">
        <Profile></Profile>
      </Route>
      <Route exact path="/">
        <div>home page</div>
      </Route>
      <Route>
        <div>This page does not exist</div>
      </Route>
    </Switch>
  );

  return (
    <Router>
      {/* token must exist */}
      {!localStorage.token ? <Redirect to="/login"></Redirect> : <Navbar user={user}></Navbar>}
      {loading ? <Loading></Loading> : routes}
    </Router>
  );

 
}
