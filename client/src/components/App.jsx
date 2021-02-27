import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router, Link, NavLink, Redirect, Route, Switch, useHistory} from 'react-router-dom'
import { agent } from '../api/agent';
import { LoginRegisterContainer } from '../containers/LoginRegisterContainer';
import { setUser } from '../redux/slices/user';
import { Loading } from './Loading';

export const App = () => {
  const user = useSelector(state => state.user.info);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get user if we have the token
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
        <div>hi {user.displayName}</div>
      </Route>
      <Route exact path="/">
        <div>home page</div>
      </Route>
      <Route>
        <div>This page does not exist</div>
      </Route>
    </Switch>
  );

  const nav = () => {
   const activeStyle = {
           fontWeight: "bold",
           color: "red",
         }
   
   return (
     <nav>
       <NavLink exact to="/" activeStyle={activeStyle}>
         Home
       </NavLink>
       <NavLink to="/login" activeStyle={activeStyle}>
         Login
       </NavLink>
       <NavLink
         to={{ pathname: `/profile/${user.displayName}` }}
         activeStyle={activeStyle}
       >
         Profile
       </NavLink>
     </nav>
   );
  };

  return (
    <Router>
      {/* token must exist */}
      {!localStorage.token ? <Redirect to="/login"></Redirect> : nav()}
      {loading ? <Loading></Loading> : routes}
    </Router>
  );

 
}
