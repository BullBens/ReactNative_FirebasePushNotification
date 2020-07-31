import {takeLatest, put, call, select} from 'redux-saga/effects';
import {push} from '@services';

const GET_USER = '[user] GET_USER';
const SET_USER = '[user] SET_USER';
const RESET_USER = '[user] RESET_USER';

const initialstate = null;

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_USER:
      return action.data;
    case RESET_USER:
      return initialstate;
    default:
      return state;
  }
};

export const getUser = () => ({type: GET_USER});
export const setUser = (data: any) => ({data, type: SET_USER});
export const resetUser = () => ({type: RESET_USER});

export function* watchUser() {
  yield takeLatest(GET_USER, getUserAsync);
}

export function* getUserAsync() {
  // const { accessToken } = yield select(state => state.profile)
  try {
  } catch (e) {
    console.log(e, 'getUserAsync ERROR');
  }
}
