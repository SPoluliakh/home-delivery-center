import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineTrash } from 'react-icons/hi2';
import { deleteTtn } from '../../Redux/ttnListReducer/ttnListReducer';
import { ttnListSelector } from '../../Redux/selectors/selectors';
import { useLazyGetHistoryQuery } from '../../Redux/ttnStatusApiOperations/ttnStatusOperations';
import * as SC from './TtnsHistory.styled';

interface IProps {
  onhandleClick: (data: string) => void;
}

export const TtnsHistory = ({ onhandleClick }: IProps) => {
  const list = useSelector(ttnListSelector);
  const [getTtnHistori] = useLazyGetHistoryQuery();
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const handlClick = (id: string) => {
    const ttn = list.find(item => item.id === id);
    if (!ttn) return;
    onhandleClick(ttn.ttnNumber);
    getTtnHistori(ttn.ttnNumber);
    setSearchParams({ ttnNumber: ttn.ttnNumber });
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTtn(id));
  };

  return (
    <SC.Section>
      <h2> Історія відправлень </h2>
      <SC.List>
        {list.map(({ ttnNumber, id }) => (
          <SC.ListItem key={id} onClick={() => handlClick(id)}>
            <p>{ttnNumber}</p>
            <SC.DeleteBtn type="button" onClick={() => handleDelete(id)}>
              <HiOutlineTrash size="18" fill="indianred" />
            </SC.DeleteBtn>
          </SC.ListItem>
        ))}
      </SC.List>
    </SC.Section>
  );
};
