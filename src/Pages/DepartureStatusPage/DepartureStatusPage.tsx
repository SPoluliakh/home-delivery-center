import { StatusForm } from '../../Components/StatusForm/StatusForm';
import { TtnInfo } from '../../Components/TtnInfo/TtnInfo';
import { TtnsHistory } from '../../Components/TtnsHistory/TtnsHistory';
import { useGetHistoryQuery } from '../../Redux/ttnHistoryApi/ttnHistoryOperations';

export const DepartureStatusPage = () => {
  const { data } = useGetHistoryQuery('');

  console.log(data);

  return (
    <>
      <StatusForm />
      <TtnInfo />
      <TtnsHistory />
    </>
  );
};
