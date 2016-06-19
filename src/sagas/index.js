import * as actions from '../actions/counter';
import { takeEvery } from 'redux-saga';
import { select, put } from 'redux-saga/effects';
import { getCounter } from '../reducers';

function* incrementIfOdd() {
  const count = yield select(getCounter);

  if (count % 2 !== 0) {
    yield put(actions.increment());
  }
}

// function* counter() {
//   yield* ;
// }

export default function* root() {
  yield takeEvery(actions.INCREMENT_IF_ODD, incrementIfOdd);
}
