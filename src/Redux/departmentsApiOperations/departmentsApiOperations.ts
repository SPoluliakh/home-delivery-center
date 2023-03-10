import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDepartments } from '../../helpers/interfaces/departments';

interface IData {
  city: string;
  id: string;
  page?: string;
}

export const departmentsApi = createApi({
  reducerPath: 'departments',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
  }),
  tagTypes: ['departments'],
  endpoints: builder => ({
    getDepartmentsList: builder.query<IDepartments, IData>({
      query: ({ city, id, page = '1' }) => ({
        method: 'POST',
        url: '/',
        body: {
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: city,
            Page: page,
            Limit: '20',
            WarehouseId: id,
          },
        },
      }),
      providesTags: ['departments'],
    }),
  }),
});

export const { useLazyGetDepartmentsListQuery } = departmentsApi;
