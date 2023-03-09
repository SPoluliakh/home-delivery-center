import { ttnListSlice } from '../ttnListReducer/ttnListReducer';
import { RootState } from '../store';
import { ttnStatusApi } from '../ttnStatusApiOperations/ttnStatusOperations';

export const ttnListSelector = (state: RootState) =>
  state[ttnListSlice.name].ttn;

export const numberTtn = (store: RootState) => store[ttnStatusApi.reducerPath];
