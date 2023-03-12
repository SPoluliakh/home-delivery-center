import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IDepartments,
  ICustomData,
} from '../../helpers/interfaces/departments';

interface IData {
  city: string;
  id: string;
  page?: string;
}

export const departmentsApi = createApi({
  reducerPath: 'departments',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://post-service-48jw.onrender.com/departments',
  }),
  tagTypes: ['departments'],
  endpoints: builder => ({
    getDepartmentsList: builder.query<IDepartments | ICustomData, IData>({
      query: ({ city, id, page = '1' }) => ({
        method: 'GET',
        url: `/?cityName=${city}&page=${page}&limit=20&id=${id}`,
      }),
      providesTags: ['departments'],
    }),
  }),
});

export const { useLazyGetDepartmentsListQuery } = departmentsApi;
