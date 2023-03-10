import { useEffect } from 'react';
import { useLazyGetDepartmentsListQuery } from '../../Redux/departmentsApiOperations/departmentsApiOperations';
import { Loader } from '../Loader/Loader';
import { DepartmentsListItem } from './DepartmentsListItem/DepartmentsListItem';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { Pagination } from '../Pagination/Pagination';

export const DepartmentsList = () => {
  const [getDepartments, { data, isLoading }] =
    useLazyGetDepartmentsListQuery();

  const { city, id, page } = useGetSearchParams();
  console.log(page);

  useEffect(() => {
    getDepartments({ city, id, page });
  }, [getDepartments, city, id, page]);

  const totalDeparts = data?.info.totalCount ?? 1;
  const disable = totalDeparts <= Number(page) * 20;
  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {data?.data.map(
          ({
            CityDescription,
            Description,
            ReceivingLimitationsOnDimensions,
            Schedule,
          }) => (
            <DepartmentsListItem
              key={Description}
              cityName={CityDescription}
              description={Description}
              dimensions={ReceivingLimitationsOnDimensions}
              schedule={Schedule}
            />
          )
        )}
      </ul>
      <Pagination disabled={disable} />
    </>
  );
};
