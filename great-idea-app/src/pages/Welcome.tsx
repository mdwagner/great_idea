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
  Button,
} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { Text } from '../components/Text';
import { useNavigate } from '../components/Router';
import { useLogout } from '../utils/AuthContext';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate('/');
  }

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
        <Grid>
          <Row>
            <H1>Welcome to Great Idea!</H1>
          </Row>
          <Row>
            <Button onPress={signOut}>
              <Text>Sign Out</Text>
            </Button>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
}
