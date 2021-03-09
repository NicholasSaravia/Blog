import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { agent } from '../api/agent';
import { LoginRegister } from '../containers/LoginRegister';
import { Profile } from '../containers/Profile';
import { setUser } from '../redux/slices/user';
import { Loading } from './layout/Loading';
import { Navbar } from './layout/Navbar';

export const App = () => {
  const user = useSelector(state => state.user.info);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  
  const handleGetSetUser = () => {
     if (user.username === null && !!localStorage.token) {
       agent.userActions
         .getUser()
         .then((user) => {
           dispatch(setUser(user));
         })
         .then(() => {
           setLoading(false);
         })
         .catch((error) => {
           // server is off
           if (typeof error.response === "undefined") {
             setNetworkError(true);
           }
           // user is unauthorized
           else if (error.response.status == 401) {
             localStorage.removeItem("token");
             dispatch(setUser());
           }
           // catch all
           else {
             localStorage.removeItem("token");
             dispatch(setUser());
           }
         });
     } else {
       setLoading(false);
     }
  }

  
  useEffect(() => {
    handleGetSetUser();
  }, []);


  const routes = (
    <Switch>
      <Route path="/login">
        {user.username == null ? (
          <LoginRegister></LoginRegister>
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
      {!localStorage.token ? (
        <Redirect to="/login"></Redirect>
      ) : (
        <Navbar user={user}></Navbar>
      )}
      {loading || networkError ? (
        <Loading>
          {networkError ? "Server not connected" : "Loading..."}
        </Loading>
      ) : (
        routes
      )}
    </Router>
  );

 
}
