// 'use strict';

import React, {Component} from 'react';
var ReactNative = require('react-native');
var {
  DatePickerIOS,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
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
      <AlarmSetButton title="Set Alarm" showTime={this.state.date}/>
      </View>
    );
  };
};
var Store = {
  _alarmTimes: ["alarmTime"],
  set: function(time) {
    this._alarmTimes.push(time);
  },
  get: function(){
    return this._alarmTimes;
  }
};

function calculateTimeDiff(alarmTime) {
  var timeTillAlarm = alarmTime - (new Date());
  return timeTillAlarm;
}

var Timer = {

  start: function(time) {

    setTimeout(()=>{Alert.alert("Wake Up")},calculateTimeDiff(time))
  }
};
export class AlarmSetButton extends Component {

  onButtonPress =  () => {
    this.props.onTimeSet(this.props.showTime);
    Timer.start(this.props.showTime);
    Alert.alert("You set the alarm to \n" + moment(this.props.showTime).format("LT"));
  }
  render() {
    return(
      <View>
      <Button
      onPress={this.onButtonPress}
      title={this.props.title}
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
