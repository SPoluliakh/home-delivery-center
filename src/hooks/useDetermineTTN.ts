import { useSelector } from 'react-redux';
import { ITtnInfo } from '../helpers/interfaces/historyApi';
import { numberTtn } from '../Redux/selectors/selectors';

export const useDetermineTTN = (ttn: string) => {
  const dat = useSelector(numberTtn);
  const data: ITtnInfo[] | unknown = dat.queries[`getHistory("${ttn}")`]?.data;

  return { data };
};
