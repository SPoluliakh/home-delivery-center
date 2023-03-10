import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IHistori, ITtnInfo } from '../../helpers/interfaces/historyApi';

export const ttnStatusApi = createApi({
  reducerPath: 'ttn-history',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
  }),
  tagTypes: ['history'],
  endpoints: builder => ({
    getHistory: builder.query<ITtnInfo[] | [], string>({
      query: docNumber => ({
        method: 'POST',
        url: '/',
        body: {
          modelName: 'TrackingDocument',
          calledMethod: 'getStatusDocuments',
          methodProperties: {
            Documents: [
              {
                DocumentNumber: docNumber,
              },
            ],
          },
        },
      }),
      transformResponse: (response: IHistori) => response.data,
      providesTags: ['history'],
    }),
  }),
});

export const { useLazyGetHistoryQuery } = ttnStatusApi;
