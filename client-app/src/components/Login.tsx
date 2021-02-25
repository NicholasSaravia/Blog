import axios from "axios";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { Button, Form } from "semantic-ui-react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("https://localhost:5001/api/account/login", {email, password})
    .then(response => console.log(response));
  };

  return (
    <Form onSubmit={(e) => loginHandler(e)}>
      <Form.Input
        type="text"
        fluid
        label="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Input
        type="password"
        fluid
        label="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button>Login</Button>
    </Form>
  );
};
