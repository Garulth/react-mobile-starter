import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigator/AppNavigator';

const navigate = ({ state, routeName, params }) =>
  AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName, params }), state);

const reset = ({ routeName, state }) => AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName })],
  }),
  state
);

const popToMainTab = ({ state }) => {
  const mainTabRoute = state.routes[0];
  return { ...state, index: 0, routes: [mainTabRoute] };
};

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'Splash' }),
);

const reducerMap = {};

reducerMap.NAV_BACK = (payload, state) =>
  AppNavigator.router.getStateForAction(NavigationActions.back(), state);

reducerMap.NAV_LOGIN = (payload, state) => reset({ state, routeName: 'LoginStack' });

const navigateReducer = (state = initialState, action) => {
  const nextState = reducerMap[action.type]
    ? reducerMap[action.type](action.payload, state)
    : AppNavigator.router.getStateForAction(action, state);
  return nextState;
};

export default navigateReducer;
