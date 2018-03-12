

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store';

import AppNavigate from '../navigator/AppNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    // strings.setLanguage('vi');
    this.state = {
      isRehydrated: true,
      store: configureStore(() => this.setState({ isRehydrated: false })),
    };
  }

  render() {
    if (this.state.isRehydrated) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <AppNavigate />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
