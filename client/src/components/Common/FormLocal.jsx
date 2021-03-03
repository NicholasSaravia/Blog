import React from 'react'
import { Button, Card, Container, Divider, Form, Icon } from 'semantic-ui-react'

export const FormLocal = ({title, body = [], handleSubmit, children}) => {

    const handleChange = () => {

    }

    const renderBody = () => {
      const bo = body.map((b) => {
        const elem = b.component ? (
          <Form.Field>{children}</Form.Field>
        ) : (
          <Form.Field>
            <label>{b.label}</label>
            <input placeholder={b.label} value="" onChange={handleChange} />
          </Form.Field>
        );
        return elem;
      });
      return bo;
    }


    return (
      <Card>
        <Card.Content header={title}></Card.Content>
        <Card.Content>
          <Form onSubmit={(e) => handleSubmit(e)}>
            {renderBody()}
            <Divider></Divider>
            <Button
              animated
              fluid
              color="blue"
              basic
              onClick={(e) => handleSubmit(e)}
            >
              <Button.Content visible>Submit</Button.Content>
              <Button.Content hidden>
                <Icon name="checkmark" />
              </Button.Content>
            </Button>{" "}
          </Form>
        </Card.Content>
      </Card>
    );
}
