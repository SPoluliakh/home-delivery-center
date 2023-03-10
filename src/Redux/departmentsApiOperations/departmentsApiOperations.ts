import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IDepartments,
  IDepartInfo,
} from '../../helpers/interfaces/departments';

interface IData {
  city: string;
  id: string;
}

export const departmentsApi = createApi({
  reducerPath: 'departments',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
  }),
  tagTypes: ['departments'],
  endpoints: builder => ({
    getDepartmentsList: builder.query<IDepartInfo[], IData>({
      query: ({ city, id }) => ({
        method: 'POST',
        url: '/',
        body: {
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: city,
            Page: '1',
            Limit: '50',
            WarehouseId: id,
          },
        },
      }),
      transformResponse: (response: IDepartments) => response.data,
      providesTags: ['departments'],
    }),
  }),
});

export const { useLazyGetDepartmentsListQuery } = departmentsApi;
