import { takeLatest, put, all } from 'redux-saga/effects';
// import { persistStore } from 'redux-persist';


function* logOut() {
  try {
    // const response = yield api.log_out();
    // if (response.data) {
    // yield all([
    //   put({
    //     type: 'LOGOUT_SUCCESS',
    //     payload: response.data
    //   }),
    //   persistStore(store).purge(),
    //   navigator.navSignIn(),
    // ]);
    // }
  } catch (error) {
    yield errorWrapper({ type: 'LOGOUT_FAILED', payload: error.response });
  }
}

const AppSaga = [
  // Order
  takeLatest('LOGOUT_PENDING', logOut),
];

export default AppSaga;
