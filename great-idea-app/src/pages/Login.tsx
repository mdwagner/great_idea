import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput />
      </View>
      <Button title="Login" onPress={() => void 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
