import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import moment from "moment";
import App from "../app/App"
import TimePicker from "../app/TimePicker"

it('expect the time to display with the correct time', () => {
var  app = new App();

  expect(app.state.time).toEqual(moment().format("LTS"));
  expect(app.state.date).toEqual(moment().format("LL"));
  });
