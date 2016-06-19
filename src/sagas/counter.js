import * as actions from '../actions/counter';
import { takeEvery, select, put } from 'redux-saga';
import { getCounter } from '../reducers';

function* incrementIfOdd() {
  const count = yield select(getCounter);

  if (count % 2 !== 0) {
    yield put(actions.increment());
  }
}

export default function* counter() {
  yield takeEvery(actions.INCREMENT_IF_ODD, incrementIfOdd());
}
