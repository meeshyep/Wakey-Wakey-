import React, {Component} from "react";

import {

  View,
  Text,
  StyleSheet,

} from "react-native";

import moment from "moment";
import KeepAwake from "react-native-keep-awake";
import TimePicker from "./TimePicker";

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  timeText: {
    marginTop: 20,
    color: '#999999',
    fontSize: 40
  },
  dateText: {
    color: '#999999',
    fontSize: 20
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("LTS"),
      date: moment().format("LL")
    };
  }

  render() {

    setTimeout(() => {
      this.setState({
        time: moment().format("LTS"),
        date: moment().format("LL")
      })
    }, 1000)
    return(
      <View>
      <Text style={styles.timeText}>
        {this.state.time}
       </Text>
       <Text style={styles.dateText}>
       {this.state.date}
       </Text>

       <TimePicker />
      </View>
    );
  }
}
