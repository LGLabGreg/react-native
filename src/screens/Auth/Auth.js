import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import tabNavigation from '../../navigation/tabNavigation';

class AuthScreen extends Component {
  loginHandler = () => {
    tabNavigation();
  };

  render() {
    console.log('render');
    return (
      <View>
        <Text>Auth screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
