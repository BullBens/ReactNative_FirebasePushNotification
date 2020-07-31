import {combineReducers} from 'redux';

export default combineReducers({
  appGlobalState: require('./appGlobalState').default,
  user: require('./user').default,
  // ADD NEW REDUCER
});
