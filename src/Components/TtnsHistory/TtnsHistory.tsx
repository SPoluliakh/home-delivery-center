import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ttnListSelector } from '../../Redux/selectors/selectors';
import { useLazyGetHistoryQuery } from '../../Redux/ttnHistoryApiOperations/ttnHistoryOperations';

interface IProps {
  onhandleClick: (data: string) => void;
}

export const TtnsHistory = ({ onhandleClick }: IProps) => {
  const list = useSelector(ttnListSelector);
  const [getTtnHistori] = useLazyGetHistoryQuery();
  const [, setSearchParams] = useSearchParams();

  const handlClick = (id: string) => {
    const ttn = list.find(item => item.id === id);
    if (!ttn) return;
    onhandleClick(ttn.ttnNumber);
    getTtnHistori(ttn.ttnNumber);
    setSearchParams({ ttnNumber: ttn.ttnNumber });
  };
  console.log('TtnsHistory-------');
  return (
    <ul>
      {list.map(({ ttnNumber, id }) => (
        <li key={id} onClick={() => handlClick(id)}>
          {ttnNumber}
        </li>
      ))}
    </ul>
  );
};
