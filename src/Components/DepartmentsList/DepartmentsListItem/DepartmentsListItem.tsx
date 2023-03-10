import { useState } from 'react';
import { ISchedule, ISize } from '../../../helpers/interfaces/departments';

interface IProps {
  cityName: string;
  description: string;
  dimensions: ISize;
  schedule: ISchedule;
}

export const DepartmentsListItem = ({
  cityName,
  description,
  dimensions: { Height, Length, Width },
  schedule: { Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday },
}: IProps) => {
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  const handleClick = () => {
    setShowSchedule(!showSchedule);
  };
  return (
    <li>
      <p>місто: {cityName}</p>
      <p>{description}</p>
      <p>
        розміри посилки: висота - {Height}, ширина - {Width}, довжина -{Length}
      </p>
      <button onClick={handleClick} type="button">
        Графік роботи
      </button>
      {showSchedule && (
        <ul>
          <li>понеділок -{Monday},</li>
          <li>вівторок -{Thursday},</li>
          <li>середа -{Wednesday},</li>
          <li>четвер -{Tuesday},</li>
          <li>п'ятниця -{Friday},</li>
          <li>субота -{Saturday},</li>
          <li>неділя -{Sunday}</li>
        </ul>
      )}
    </li>
  );
};
