import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Field } from 'formik';

interface Props {
  name: string;
  placeholder: string;
}

export const FormField: React.FC<Props> = ({
  name,
  placeholder,
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <View style={styles.container}>
          <View style={styles.input}>
            <Text>{placeholder}: </Text>
            <TextInput {...field} />
          </View>

          {meta.touched && meta.error && (
            <Text style={styles.error}>
              {meta.error}
            </Text>
          )}
        </View>
      )}
    </Field>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
  },
  error: {
    color: '#fff',
    backgroundColor: '#ff0000',
    flex: 1,
  },
});
