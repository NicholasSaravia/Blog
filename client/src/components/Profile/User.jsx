import React from 'react'
import { useSelector } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';
import userImg from '../../images/matthew.png'

export const User = () => {
  const user = useSelector((state) => state.user.info);

  return (
    <Card>
      <Image src={userImg} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{user.displayName}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {user.displayName} is living in a van down by the river.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends 
        </a>
      </Card.Content>
    </Card>
  );
}
