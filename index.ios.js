import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ClockCamera from "./app/TimePicker.js";


export default class clock extends Component {
  render() {
    return(<ClockCamera />)
  }
}


AppRegistry.registerComponent('clock', () => clock);
