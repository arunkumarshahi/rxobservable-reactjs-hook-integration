import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './root';
import { compose } from 'redux';
import logger from 'redux-logger';
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;
export function configureStore(initialState: any = {}) {
  //if (!store) {
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware, logger)));
  epicMiddleware.run(rootEpic);
  // }

  return store;
}

export default configureStore;
