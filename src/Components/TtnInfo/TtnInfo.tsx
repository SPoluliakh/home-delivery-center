import { memo } from 'react';
import { useDetermineTTN } from '../../hooks/useDetermineTTN';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import * as SC from './TtnInfo.styled';

export const TtnInfo = memo(() => {
  const { ttnNumber } = useGetSearchParams();
  const { data } = useDetermineTTN(ttnNumber);

  return (
    <SC.Section>
      <h2 className="visually-hidden"> Інформація про відправлення. </h2>
      {data ? (
        <>
          <SC.TextInfo>
            <SC.TitleInfo>Статус доставки: </SC.TitleInfo>
            {(data as { status: string }).status}.
          </SC.TextInfo>
          <SC.TextInfo>
            <SC.TitleInfo>Відправлено: </SC.TitleInfo>
            {(data as { recipientAdress: string }).recipientAdress}-
            {(data as { recipient: string }).recipient}.
          </SC.TextInfo>
          <SC.TextInfo>
            <SC.TitleInfo> Отримано: </SC.TitleInfo>
            {(data as { senderAdress: string }).senderAdress}-
            {(data as { sender: string }).sender}.
          </SC.TextInfo>
        </>
      ) : (
        <SC.TextInfo>
          Введіть номер накладної, або виберіть зі списку
        </SC.TextInfo>
      )}
    </SC.Section>
  );
});
