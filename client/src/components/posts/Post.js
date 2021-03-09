import React from 'react'
import { Card } from 'semantic-ui-react';

export const Post = ({title, meta, body}) => {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{meta}</Card.Meta>
          <Card.Description>
            <div dangerouslySetInnerHTML={{__html: body}}></div>
          </Card.Description>
        </Card.Content>
      </Card>
    );
}
