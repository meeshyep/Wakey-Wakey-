import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});



test('expect the time to display with the correct time', () => {
  const app = require('../app/Ap');
  expect(App.state.time).toEqual(moment().format("LTS");
  });
