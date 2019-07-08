import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

Navigation.registerComponent('app.AuthScreen', () => AuthScreen);
Navigation.registerComponent('app.SharePlaceScreen', () => SharePlaceScreen);
Navigation.registerComponent('app.FindPlaceScreen', () => FindPlaceScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'app.AuthScreen',
        passProps: {
          title: 'Login'
        }
      }
    }
  });
});
