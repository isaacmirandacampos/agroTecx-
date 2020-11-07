/* eslint-disable consistent-return */
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'agroTec',
      storage,
      whitelist: ['user', 'auth'],
    },
    reducers
  );
  return persistedReducer;
};
