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
  Spinner,
} from 'native-base';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text } from '../components/Text';
import { useNavigate } from '../components/Router';
import { useLogin } from '../utils/AuthContext';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
})

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const signIn = useLogin();

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
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={async (values, formikBag) => {
            const { email, password } = values;

            return signIn(email, password)
              .then(() => {
                navigate('/welcome');
              })
              .catch(() => {
                formikBag.resetForm();
              });
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting }) => (
            <Form>
              <Item stackedLabel error={Boolean(errors.email)}>
                <Label>Email</Label>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </Item>
              <Item stackedLabel last error={Boolean(errors.password)}>
                <Label>Password</Label>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
              </Item>

              {isSubmitting ? (
                <Spinner color="#000" />
              ) : (
                <Button onPress={handleSubmit}>
                  <Text>Sign In</Text>
                </Button>
              )}
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}
