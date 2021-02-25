import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import {agent} from '../api/agent';
import { setUser } from '../redux/slices/user';

export const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        agent.userActions
          .login({ email, password })
          .then((user) => {
            dispatch(setUser(user));
            localStorage.setItem("token", `bearer ${user.token}`);
            const location = {
              pathname: `/profile/${user.displayName}`,
              state: { fromLogin: true },
            };
            history.push(location);
          }).catch(error => {
            console.log(error);
          });
            
    }

    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
}