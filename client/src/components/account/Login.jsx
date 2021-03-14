import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import {agent} from '../../api/agent';
import { setUser } from '../../redux/slices/user';

export const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();

    useEffect(() => {
      emailRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        agent.userActions
          .login({ email, password })
          .then((user) => {
            // set token in local storage
            localStorage.setItem("token", `bearer ${user.token}`);
            // set user to state
            dispatch(setUser(user));
            // after user is found send to profile
            const location = {
              pathname: `/profile/${user.displayName}`,
              state: { fromLogin: true },
            };
            history.push(location);
          }).catch(error => {
          });
            
    }

    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            ref={emailRef}
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
        <Button
          disabled={email.trim() === "" || password.trim() === ""}
          type="submit"
          fluid
        >
          Submit
        </Button>
      </Form>
    );
}
