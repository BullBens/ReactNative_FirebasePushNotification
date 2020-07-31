import {all} from 'redux-saga/effects';
// ADD IMPORT
import { watchUser } from './user'

export default function* rootSaga() {
  yield all([
    // ADD WATCHER
		watchUser(),
  ]);
}
