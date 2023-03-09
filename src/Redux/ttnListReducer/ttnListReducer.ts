import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface TPayload {
  id: string;
  ttnNumber: string;
}

interface IPayload {
  payload: TPayload;
}
interface IInitial {
  ttn: TPayload[];
}

const initialState: IInitial = {
  ttn: [],
};

export const ttnListSlice = createSlice({
  name: 'ttnList',
  initialState,
  reducers: {
    addTtn(state, { payload }: IPayload) {
      state.ttn.push(payload);
    },
  },
});

const persistConfig = {
  key: 'ttn',
  storage,
};

export const persistTtnListReducer = persistReducer(
  persistConfig,
  ttnListSlice.reducer
);

// Actions
export const { addTtn } = ttnListSlice.actions;
