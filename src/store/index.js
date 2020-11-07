import { combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import createStore from './createStore';

import snackbar from './ducks/snackbar';
import overlay from './ducks/overlay';
import persistReducers from './persistReducers';

function* rootSaga() {
  return yield all([]);
}

const rootReducer = combineReducers({
  snackbar,
  overlay,
});

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
