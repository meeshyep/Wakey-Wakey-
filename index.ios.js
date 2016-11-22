/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from "./app/App";
import TimePicker from "./app/TimePicker"
export default class clock extends Component {
  render() {
    return(
      <View>
      <App />
      <TimePicker />
      </View>
      )

  }
}



AppRegistry.registerComponent('clock', () => clock);
