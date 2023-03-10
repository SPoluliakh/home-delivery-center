import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLazyGetDepartmentsListQuery } from '../../Redux/departmentsApiOperations/departmentsApiOperations';
import { Loader } from '../Loader/Loader';
import { DepartmentsListItem } from './DepartmentsListItem/DepartmentsListItem';

export const DepartmentsList = () => {
  const [getDepartments, { data, isLoading }] =
    useLazyGetDepartmentsListQuery();

  const [searchParams] = useSearchParams();
  const city = searchParams.get('city') ?? '';
  const id = searchParams.get('id') ?? '';

  useEffect(() => {
    getDepartments({ city, id });
  }, [getDepartments, city, id]);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {data?.map(
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
    </>
  );
};
