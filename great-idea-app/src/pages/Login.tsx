import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Label,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import { Text } from '../components/Text';
import { useNavigate } from '../components/Router';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/welcome');
  }

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>

      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button onPress={onSubmit}>
            <Text>Sign In</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
