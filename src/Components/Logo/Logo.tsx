import { FaBookReader } from 'react-icons/fa';
import * as SC from './Logo.styled';

export const Logo = () => {
  return (
    <SC.HeartWrap>
      <p>
        <FaBookReader size={24} /> <SC.Heart>💛</SC.Heart>
        <SC.HeartTwo>💙</SC.HeartTwo>
      </p>
    </SC.HeartWrap>
  );
};
