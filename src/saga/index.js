import { all } from "redux-saga/effects";
import appSaga from "./AppSaga";

const sagas = [...appSaga];

export default function* root() {
  yield all(sagas);
}
