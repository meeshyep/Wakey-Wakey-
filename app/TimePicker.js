// 'use strict';

import React, {Component} from 'react';
var ReactNative = require('react-native');
var {
  DatePickerIOS,
  StyleSheet,
  Text,
  View,
} = ReactNative;

export default class TimePicker extends Component {
  static defaultProps = {
    date: new Date(),
  };

  state = {
    date: this.props.date
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };


  render() {
    return (
      <View>
      <Heading label="Set alarm time" />
      <DatePickerIOS
      date={this.state.date}
      mode="time"
      onDateChange={this.onDateChange}
      minuteInterval={1}
      />

      </View>
    );
  }


};

class Heading extends Component {
 render() {
   return (
     <View>
       <Text>
         {this.props.label}
       </Text>
     </View>
   );
 }
}
