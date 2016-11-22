// 'use strict';

import React, {Component} from 'react';
var ReactNative = require('react-native');
var {
  DatePickerIOS,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} = ReactNative;
import moment from "moment";
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
      <AlarmSetButton showTime={this.state.date}/>

      </View>
    );
  };
};

class AlarmSetButton extends Component {

  onButtonPress =  () => {
    Alert.alert("You set the alarm to \n" + moment(this.props.showTime).format("LT"));
  }
  render() {
    return(
      <View>
      <Button
      onPress={this.onButtonPress}
      title="Set Alarm"
      />
      </View>
    )
  }
}


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
