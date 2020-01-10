import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from './screens/Home';
import { Details } from './screens/Details';

const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
  },
  {
    initialRouteName: 'Home',
  }
);

export const App = createAppContainer(AppNavigator);
