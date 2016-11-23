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
  ListView
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
      <TimesListView onChange={TimesListView.addTimeToList}/>
      </View>
    );
  };
};
var userAlarmTimes = ["initial time"];
export class AlarmSetButton extends Component {

  onButtonPress =  () => {
    var alarmTime = this.props.showTime;
    userAlarmTimes.push(moment(alarmTime).format("LT"));
    new TimesListView(userAlarmTimes);
    console.log(new TimesListView(userAlarmTimes));
    Alert.alert("You set the alarm to \n" + moment(alarmTime).format("LT"));
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


class TimesListView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log(ds);
    this.state = {
      dataSource: ds.cloneWithRows(userAlarmTimes),
    };
  }
addTimeToList = ()=>{
  this.setState({
    dataSource: ds.cloneWithRows(userAlarmTimes)
  })
}
  render() {
    return (
      <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    );
  }
}
