import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

export const Home: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
