import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { ttnHistoryApi } from './ttnHistoryApiOperations/ttnHistoryOperations';
import {
  persistTtnListReducer,
  ttnListSlice,
} from './ttnListReducer/ttnListReducer';

export const store = configureStore({
  reducer: {
    [ttnListSlice.name]: persistTtnListReducer,
    [ttnHistoryApi.reducerPath]: ttnHistoryApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ttnHistoryApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
