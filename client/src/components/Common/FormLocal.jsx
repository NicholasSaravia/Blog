import React from 'react'
import { Button, Card, Container, Divider, Form, Icon } from 'semantic-ui-react'

export const FormLocal = ({title, body = [], handleSubmit, children, handleChange}) => {

  const changeHandler = (e) => {
    handleChange({name: e.target.name, value: e.target.value});
  }

    const renderBody = () => {
      const bo = body.map((b, i) => {
        const elem = b.component ? (
          <Form.Field key={i}>{children}</Form.Field>
        ) : (
          <Form.Field key={i}>
            <label>{b.label}</label>
            <input name={b.name} placeholder={b.label}
            onChange={(e) => changeHandler(e)} />
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
            >
              <Button.Content visible>Submit</Button.Content>
              <Button.Content hidden>
                <Icon name="checkmark" />
              </Button.Content>
            </Button>
          </Form>
        </Card.Content>
      </Card>
    );
}
