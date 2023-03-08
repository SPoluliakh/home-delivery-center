import { StatusForm } from '../../Components/StatusForm/StatusForm';
import { TtnInfo } from '../../Components/TtnInfo/TtnInfo';
import { TtnsHistory } from '../../Components/TtnsHistory/TtnsHistory';

export const DepartureStatusPage = () => {
  return (
    <>
      <StatusForm />
      <TtnInfo />
      <TtnsHistory />
    </>
  );
};
