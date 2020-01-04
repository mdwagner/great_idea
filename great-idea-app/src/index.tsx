import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import { useIsFocused } from 'react-navigation-hooks';

const HomeScreen: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const DetailsScreen: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
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
    <View style={styles.detailsScreen}>
      <Text>Details Screen</Text>
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

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export const App = AppContainer;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
