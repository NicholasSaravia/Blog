import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Card, Container, Grid } from 'semantic-ui-react'
import { Login } from '../components/Login'
import { Register } from '../components/Register';
import '../css/loginRegister.css';

export const LoginRegisterContainer = () => {

    const [loggingIn, setloggingIn] = useState(true);

    return (
      <React.Fragment>
        <Container>
          <Card>
            <Card.Content>
              {loggingIn ? <Login></Login> : <Register></Register>}
              {loggingIn ? (
                <Button onClick={() => setloggingIn(false)}>Register</Button>
              ) : (
                <Button onClick={() => setloggingIn(true)}>Login</Button>
              )}
            </Card.Content>
          </Card>
        </Container>
      </React.Fragment>
    );
}
