import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import moment from "moment";
import App from "../app/App"

<<<<<<< HEAD


=======
>>>>>>> e2e9c4ee99df8c458624023189be27c03da88de3
it('expect the time to display with the correct time', () => {
var  app = new App();

  expect(app.state.time).toEqual(moment().format("LTS"));
  expect(app.state.date).toEqual(moment().format("LL"));
  });
