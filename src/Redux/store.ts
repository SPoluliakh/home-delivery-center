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
import { ttnStatusApi } from './ttnStatusApiOperations/ttnStatusOperations';
import {
  persistTtnListReducer,
  ttnListSlice,
} from './ttnListReducer/ttnListReducer';
import { departmentsApi } from './departmentsApiOperations/departmentsApiOperations';

export const store = configureStore({
  reducer: {
    [ttnListSlice.name]: persistTtnListReducer,
    [ttnStatusApi.reducerPath]: ttnStatusApi.reducer,
    [departmentsApi.reducerPath]: departmentsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ttnStatusApi.middleware,
    departmentsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
