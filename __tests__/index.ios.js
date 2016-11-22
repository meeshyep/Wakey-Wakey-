import 'react-native';
import React from 'react';
import Index from '../index.ios.js';
import App from "../app/App";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import moment from "moment";

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

test('expect the time to display with the correct time', () => {
  const app = {
    time: moment().format("LTS"),
    date: moment().format("LL")
    };

  expect(app.time).toEqual(moment().format("LTS"));
  expect(app.date).toEqual(moment().format("LL"));
  });


//
// test('expect the initial date in date picker to be current date', () => {
//     defaultProps = {
//     date: new Date(),
//   };
//   state = {
//     date: this.props.date
//   };
//
//   expect(state.date).toEqual(moment().format("LL"));
// });
