import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ttnHistoryApi = createApi({
  reducerPath: 'ttn-history',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
  }),
  tagTypes: ['history'],
  endpoints: builder => ({
    getHistory: builder.query({
      query: () => ({
        method: 'POST',
        url: '/',
        body: {
          modelName: 'TrackingDocument',
          calledMethod: 'getStatusDocuments',
          methodProperties: {
            Documents: [
              {
                DocumentNumber: '59000914214507',
                Phone: '+380930039288',
              },
            ],
          },
        },
      }),
      providesTags: ['history'],
    }),
  }),
});

export const { useGetHistoryQuery } = ttnHistoryApi;
