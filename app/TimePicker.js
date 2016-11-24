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
      <AlarmSetButton title="Set Alarm" showTime={this.state.date} onTimeSet={Store.set.bind(Store)}/>
      <TimesListView onChange={TimesListView.addTimeToList}/>
      </View>
    );
  };
};
var Store = {
  _alarmTimes: [],
  set: function(time) {
    this._alarmTimes.push(time);
  }
  get: function(){
    return this._alarmTimes;
  }
}
export class AlarmSetButton extends Component {

  onButtonPress =  () => {
    this.props.onTimeSet(this.props.showTime);
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

console.log(Store.get);

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
