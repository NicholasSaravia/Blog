import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { agent } from '../api/agent';
import { setUser } from '../redux/slices/user';

export const Register = () => {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const emailInput = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        agent.userActions
          .register({ email, displayName, username: displayName, password })
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
          })
          .catch((error) => console.log(error));
    }

    useEffect(() => {
      emailInput.current.focus();
    }, [])

    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            ref={emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
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
          disabled={
            email.trim() === "" ||
            displayName.trim() === "" ||
            password.trim() === ""
          }
          type="submit"
          fluid
        >
          Submit
        </Button>
      </Form>
    );
}
