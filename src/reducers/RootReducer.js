
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AppReducer from './AppReducer';
import NavigatorReducer from './NavigatorReducer';

const reducers = combineReducers({
  app: AppReducer,
  form: formReducer,
  nav: NavigatorReducer
});

const RootReducer = (state = {}, action) => {
  //handle ROOT state like REHYDRATE or LOGOUT


  //default return app state
  return reducers(state, action);
}

export default RootReducer;