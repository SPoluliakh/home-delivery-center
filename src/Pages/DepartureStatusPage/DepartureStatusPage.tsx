import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyGetHistoryQuery } from '../../Redux/ttnHistoryApiOperations/ttnHistoryOperations';
import { addTtn } from '../../Redux/ttnListReducer/ttnListReducer';
import { ttnListSelector } from '../../Redux/selectors/selectors';
import { StatusForm } from '../../Components/StatusForm/StatusForm';
import { TtnInfo } from '../../Components/TtnInfo/TtnInfo';
import { TtnsHistory } from '../../Components/TtnsHistory/TtnsHistory';
import { Loader } from '../../Components/Loader/Loader';

export const DepartureStatusPage = () => {
  const [ttnNumber, setTtnNumber] = useState<string>('');
  const [getTtnHistori, { isLoading }] = useLazyGetHistoryQuery();
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const listOfTtn = useSelector(ttnListSelector);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const regex = /^([0-9]{14})$/;
    if (!regex.test(ttnNumber)) {
      toast.warn(`Неправильний номер накладної`);
      return;
    }

    getTtnHistori(ttnNumber);
    setSearchParams({ ttnNumber: ttnNumber });

    const list = listOfTtn.some(item => item.ttnNumber === ttnNumber);
    if (list) {
      return;
    }

    const payload = {
      id: nanoid(),
      ttnNumber,
    };
    dispatch(addTtn(payload));
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    setTtnNumber(value.trim());
  };

  return (
    <>
      {isLoading && <Loader />}
      <StatusForm
        onSubmit={handleSubmit}
        inputValue={ttnNumber}
        onChange={handleInputChange}
      />
      <TtnInfo />
      <TtnsHistory onhandleClick={setTtnNumber} />
    </>
  );
};
