import { useEffect, memo } from 'react';
import { useLazyGetDepartmentsListQuery } from '../../Redux/departmentsApiOperations/departmentsApiOperations';
import { Loader } from '../Loader/Loader';
import { DepartmentsListItem } from './DepartmentsListItem/DepartmentsListItem';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { Pagination } from '../Pagination/Pagination';
import { NoInfo } from '../NoInfo/NoInfo';
import * as SC from './DepartmentsList.styled';

export const DepartmentsList = memo(() => {
  const [getDepartments, { data, isLoading }] =
    useLazyGetDepartmentsListQuery();

  const { city, id, page } = useGetSearchParams();

  useEffect(() => {
    getDepartments({ city, id, page });
  }, [getDepartments, city, id, page]);

  const totalDeparts = data?.info.totalCount ?? 1;
  const disable = totalDeparts <= Number(page) * 20;

  return (
    <section>
      {!data?.info.totalCount && !isLoading && <NoInfo />}
      <h2 className="visually-hidden"> Список відділень </h2>
      {isLoading && <Loader />}
      <SC.List>
        {data?.data?.map(
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
      </SC.List>
      <Pagination disabled={disable} />
    </section>
  );
});
