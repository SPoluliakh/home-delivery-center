import { ttnListSlice } from '../ttnListReducer/ttnListReducer';
import { RootState } from '../store';
import { ttnHistoryApi } from '../ttnHistoryApiOperations/ttnHistoryOperations';

export const ttnListSelector = (state: RootState) =>
  state[ttnListSlice.name].ttn;

export const numberTtn = (store: RootState) => store[ttnHistoryApi.reducerPath];
