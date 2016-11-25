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
import Camera from "react-native-camera";

export default class ClockCamera extends Component {
  render() {
    return (
      <View>
      <Camera
      ref={(cam) => {
        this.camera = cam;
      }}
      // style={styles.preview}
      aspect={Camera.constants.Aspect.fill}>
      <Text onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
      </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    // backgroundcolor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export class TimePicker extends Component {
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
  console.log(timeTillAlarm);
  return timeTillAlarm;
}

function soundAlarm() {
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3'),
  AudioPlayer.play('woopwoop.mp3')
}



<<<<<<< HEAD
    setTimeout(()=>{AudioPlayer.play('woopwoop.mp3')},calculateTimeDiff(time))
=======
var Timer = {
  start: function(time) {
    setTimeout(soundAlarm,calculateTimeDiff(time))
>>>>>>> 9bcf34419233068e8618db4c0aed499beaf4ee48
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
