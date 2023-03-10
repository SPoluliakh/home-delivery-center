import { useState } from 'react';
import { ISchedule, ISize } from '../../../helpers/interfaces/departments';
import { GrSchedule } from 'react-icons/gr';
import * as SC from './DepartmentsListItem.styled';

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
    <SC.Item>
      <p>
        <SC.TitleInfo>місто: </SC.TitleInfo>
        {cityName}
      </p>
      <p>{description}</p>
      <p>
        <SC.TitleInfo>розміри посилки:</SC.TitleInfo> висота - {Height}, ширина
        - {Width}, довжина -{Length}
      </p>
      <SC.Button onClick={handleClick} type="button">
        <GrSchedule size={24} />
      </SC.Button>
      {showSchedule && (
        <SC.InnerList>
          <li>понеділок: {Monday},</li>
          <li>вівторок: {Thursday},</li>
          <li>середа: {Wednesday},</li>
          <li>четвер: {Tuesday},</li>
          <li>п'ятниця: {Friday},</li>
          <li>субота: {Saturday},</li>
          <li>неділя: {Sunday}</li>
        </SC.InnerList>
      )}
    </SC.Item>
  );
};
