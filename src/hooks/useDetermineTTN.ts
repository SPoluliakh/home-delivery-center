import { useSelector } from 'react-redux';
import { IHistori } from '../helpers/interfaces/historyApi';
import { numberTtn } from '../Redux/selectors/selectors';

export const useDetermineTTN = (ttn: string) => {
  const document = useSelector(numberTtn);
  const data: IHistori | unknown =
    document.queries[`getHistory("${ttn}")`]?.data;

  return { data };
};
