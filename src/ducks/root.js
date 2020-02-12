import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from './fetchUserEpic';
import { pingEpic } from './pingEpic';
import { combineReducers } from 'redux';
import { pingReducer } from './ping';
import { users } from './users';
export const rootEpic = combineEpics(pingEpic, fetchUserEpic);

export const rootReducer = combineReducers({
  pingReducer,
  users
});
