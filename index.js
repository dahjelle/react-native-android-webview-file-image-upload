import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';

class App extends Component {
  render() {
    return <Text>Hello, world!</Text>
  }
}

AppRegistry.registerComponent('webviewtest', () => App);
