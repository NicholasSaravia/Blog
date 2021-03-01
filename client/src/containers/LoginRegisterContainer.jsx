import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Card, Container, Divider, Grid, Icon } from 'semantic-ui-react'
import { Login } from '../components/Login'
import { Register } from '../components/Register';
import "../css/loginRegister.css";

export const LoginRegisterContainer = () => {

    const [loggingIn, setloggingIn] = useState(true);
    const [visible, setVisible] = useState(true);
    const user = useSelector(state => state.user.info);
    const arrowDirection = loggingIn ? "arrow right" : "arrow left";
    const buttonText = loggingIn ? "Register" : "Login";
    const titleText = loggingIn ? "Login" : "Register";

    const handleButtonClick = (e) => {
      e.preventDefault();
      setloggingIn(!loggingIn);
    }

    return (
      <React.Fragment>
        {user.username !== null ? (
          <Redirect
            to={{ pathname: `/profile/${user.displayName}` }}
          ></Redirect>
        ) : null}

        <Container className="login-register">
          <Card>
            <Card.Content header={titleText}></Card.Content>
            <Card.Content>
              {loggingIn ? <Login></Login> : <Register></Register>}
              <Divider></Divider>
              <Button
                animated
                fluid
                color="green"
                onClick={(e) => handleButtonClick(e)}
              >
                <Button.Content visible>{buttonText}</Button.Content>
                <Button.Content hidden>
                  <Icon name={arrowDirection} />
                </Button.Content>
              </Button>
            </Card.Content>
          </Card>
        </Container>
      </React.Fragment>
    );
}
