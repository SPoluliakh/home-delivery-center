import { useSearchParams } from 'react-router-dom';

export const useGetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ttnNumber = searchParams.get('ttnNumber') ?? '';
  const city = searchParams.get('city') ?? '';
  const id = searchParams.get('id') ?? '';
  const page = searchParams.get('page') ?? '1';

  return { city, id, page, ttnNumber, setSearchParams };
};
