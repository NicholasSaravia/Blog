import React from 'react'
import { Button, Card, Divider, Form, Icon } from 'semantic-ui-react'

export const FormLocal = ({
  formTitle,
  body = [],
  handleSubmit,
  children,
  handleChange,
}) => {

  const changeHandler = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const renderBody = () => {
    const formBody = body.map((b, i) => {
      const formItem = b.component ? (
        <Form.Field key={i}>{children}</Form.Field>
      ) : (
        <Form.Field key={i}>
          <label>{b.label}</label>
          <input
            name={b.name}
            placeholder={b.label}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Field>
      );
      return formItem;
    });
    return formBody;
  };

  return (
    <Card fluid>
      <Card.Content header={formTitle}></Card.Content>
      <Card.Content>
        <Form onSubmit={(e) => handleSubmit(e)}>
          {renderBody()}
          <Divider></Divider>
          <Button animated fluid color="blue" basic>
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>
              <Icon name="checkmark" />
            </Button.Content>
          </Button>
        </Form>
      </Card.Content>
    </Card>
  );
};
