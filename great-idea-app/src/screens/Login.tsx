import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Formik } from 'formik';
import { FormField } from '../components/FormField';

const initialValues = {
  email: '',
  password: '',
};

export const Login: React.FC<NavigationStackScreenProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikBag) => {
        console.log(values);
      }}
    >
      {({ submitForm }) => {
        return (
          <View style={styles.container}>
            <FormField
              name="email"
              placeholder="Email"
            />
            <FormField
              name="password"
              placeholder="Password"
            />

            <View style={styles.submit}>
              <Button
                title="Submit"
                onPress={submitForm}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    flex: 1,
    flexDirection: 'row',
  },
});
