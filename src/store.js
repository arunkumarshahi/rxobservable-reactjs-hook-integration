import { ajax } from 'rxjs/ajax';
// import { Observable } from 'rxjs/Observable';
import { map, filter, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ofType, combineEpics, createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// const { map, filter, mergeMap } = rxjs.operators;
// const { combineReducers, createStore, applyMiddleware } = Redux;
// const { ofType, combineEpics, createEpicMiddleware } = ReduxObservable;
import { from } from 'rxjs';
const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

export const fetchUser = (username) => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = (payload) => ({ type: FETCH_USER_FULFILLED, payload });

// const fetchUserEpic = (action$) =>
// 	action$.pipe(
// 		ofType(FETCH_USER),
// 		mergeMap((action) =>
// 			ajax
// 				.getJSON(`https://api.github.com/users/${action.payload}`)
// 				.pipe(map((response) => fetchUserFulfilled(response)))
// 		)
// 	);

const fetchUserEpic = (action$) =>
	action$.pipe(
		ofType(FETCH_USER),
		mergeMap((action) =>
			from(fetch(`https://api.github.com/users/${action.payload}`).then((response) => response.json())).pipe(
				map((response) => fetchUserFulfilled(response))
			)
		)
	);
const users = (state = { a: 1 }, action) => {
	switch (action.type) {
		case FETCH_USER_FULFILLED:
			console.log('fulfilled called ...', {
				...state,
				a: 100,
				names: action.payload
			});
			return {
				...state,
				a: 100,
				names: action.payload
			};

		default:
			return state;
	}
};

const rootReducer = combineReducers({ users });
const rootEpic = combineEpics(fetchUserEpic);
const epicMiddleware = createEpicMiddleware();
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

// export const chatStore = {
// 	init: () => subject.next(state),
// 	subscribe: (setState) => subject.subscribe(setState)
// };
