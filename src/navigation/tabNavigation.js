import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const tabNavigation = () => {
  console.log('tabNavigation');
  Promise.all([Icon.getImageSource('md-map', 30), Icon.getImageSource('md-share-alt', 30)]).then(
    icons => {
      console.log('icons', icons);
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'app.SharePlaceScreen',
                        options: {
                          topBar: {
                            title: {
                              text: 'Share place'
                            }
                          }
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      icon: icons[0],
                      testID: 'FIRST_TAB_BAR_BUTTON',
                      text: 'Share place'
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'app.FindPlaceScreen',
                        options: {
                          topBar: {
                            title: {
                              text: 'Find place'
                            }
                          }
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      icon: icons[1],
                      testID: 'SECOND_TAB_BAR_BUTTON',
                      text: 'Find place'
                    }
                  }
                }
              }
            ]
          }
        }
      });
    }
  );
};

export default tabNavigation;
