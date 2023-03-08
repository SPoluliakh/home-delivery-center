import { configureStore } from '@reduxjs/toolkit';
import { ttnHistoryApi } from './ttnHistoryApi/ttnHistoryOperations';

export const store = configureStore({
  reducer: {
    [ttnHistoryApi.reducerPath]: ttnHistoryApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({}),
    ttnHistoryApi.middleware,
  ],
});
