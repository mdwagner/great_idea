import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  H1,
} from 'native-base';

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Great Idea!</Title>
        </Body>
        <Right />
      </Header>

      <Content padder>
        <H1>
          Welcome to Great Idea!
        </H1>
      </Content>
    </Container>
  );
}
