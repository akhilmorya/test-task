import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './reducers';
import RootScreen from './components/root/RootScreen';
import Spinner from './components/spinner';
import {PermissionsAndroid} from 'react-native';

const { store } = createStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  /**
   * A loading indicator to show any process is under progress and UI can be blocked during that duration.
   */
  spinner() {
    return (
      <Spinner />
    );
  }

  render() {
    return (
      <Provider store={store}>
          <RootScreen />
          {this.spinner()}
      </Provider>
    );
  }
}
