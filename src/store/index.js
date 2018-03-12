import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers/RootReducer';
import AppSagas from '../saga';
import AppReducer from '../reducers/AppReducer';
import { combineReducers } from 'redux';

const configureStore = (onComplete) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancer(applyMiddleware(...middlewares), autoRehydrate())
  );

  sagaMiddleware.run(AppSagas);

  persistStore(
    store,
    {
      storage: AsyncStorage,
    },
    onComplete
  );
  return store;
}

export default configureStore;

