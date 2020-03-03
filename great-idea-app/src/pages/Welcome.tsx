import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to Great Idea!
      </Text>
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
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
