import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IHistori } from '../../helpers/interfaces/historyApi';

export const ttnStatusApi = createApi({
  reducerPath: 'ttn-history',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://post-service-48jw.onrender.com/ttns',
  }),
  tagTypes: ['history'],
  endpoints: builder => ({
    getHistory: builder.query<IHistori[], string>({
      query: docNumber => ({
        method: 'GET',
        url: `/${docNumber}`,
      }),

      providesTags: ['history'],
    }),
  }),
});

export const { useLazyGetHistoryQuery } = ttnStatusApi;
