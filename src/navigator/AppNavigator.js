import React, { Component } from 'react';
import { AppState, NetInfo, View, BackHandler, StatusBar, Platform } from 'react-native';
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Login from '../components/Login';

const NoNetworkBar = () => (
  <View
    style={{
      position: 'absolute',
      top: isIPhoneX ? 30 : 0,
      left: 0,
      right: 0,
      height: 20,
      backgroundColor: defaultRedColor,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text12 style={{ color: '#FFFFFF' }}>No network connection!</Text12>
  </View>
);

export const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
  },
  {
    mode: 'none',
    headerMode: 'none',
  },
);

const preventDuplicateRoute = getNavigationAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? state
    : getNavigationAction(action, state);
};

AppNavigator.router.getStateForAction = preventDuplicateRoute(
  AppNavigator.router.getStateForAction,
);

class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
    // this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.onBackPress = this.onBackPress.bind(this);
    this.handleConnectionChange = this.handleConnectionChange.bind(this);
    this.state = {
      appState: AppState.currentState,
      connectionInfo: undefined,
    };
  }

  componentDidMount() {

    AppState.addEventListener('change', this.handleAppStateChange);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    NetInfo.addEventListener('connectionChange', this.handleConnectionChange); // use connectionChange instead of change
    // use getConnectionInfo instead of fetch
    NetInfo.getConnectionInfo().done((connectionInfo) => {
      this.setState({ connectionInfo: connectionInfo.type.toLowerCase() });
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    NetInfo.removeEventListener('connectionChange', this.handleConnectionChange);
  }


  onBackPress() {
    const { dispatch, nav } = this.props;
    // if (nav.index === 0) {
    //   return false;
    // }
    dispatch(NavigationActions.back());
    return true;
  }

  handleConnectionChange(connectionInfo) {
    this.setState({ connectionInfo: connectionInfo.type.toLowerCase() });
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
        {this.state.connectionInfo === 'none' ? <NoNetworkBar /> : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
