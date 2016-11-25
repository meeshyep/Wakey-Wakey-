// 'use strict';

import React, {Component} from 'react';
var AudioPlayer = require('react-native-audioplayer');
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
    date: new Date()
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
      <AlarmSetButton title="Set Alarm" showTime={this.state.date} onTimeSet={Store.set.bind(Store)} getTimes = {Store.get.bind(Store)}/>
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

function soundAlarm() {
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3')
}




var Timer = {
  start: function(time) {
    setTimeout(soundAlarm,calculateTimeDiff(time))


  }
};
export class AlarmSetButton extends Component {

  onButtonPress =  () => {
    this.props.onTimeSet(this.props.showTimes);
    console.log(this.props.showTime.setSeconds(0));
    Timer.start(this.props.showTime.setSeconds(0));
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
