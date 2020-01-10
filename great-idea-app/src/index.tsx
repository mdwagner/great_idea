import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from './screens/Home';
import { Details } from './screens/Details';
import { Login } from './screens/Login';

const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
    Login,
  },
  {
    initialRouteName: 'Login',
  }
);

export const App = createAppContainer(AppNavigator);
