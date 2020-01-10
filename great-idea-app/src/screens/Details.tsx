import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useIsFocused } from 'react-navigation-hooks';

export const Details: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [text, setText] = React.useState<string | null>(null);

  React.useEffect(
    () => {
      if (isFocused) {
        setTimeout(() => {
          setText('Focused');
        }, 3000);
      }
    },
    [isFocused, setText]
  );

  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>{text}</Text>
      <Button
        title="Go to Details...again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
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
