import { memo } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useDetermineTTN } from '../../hooks/useDetermineTTN';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import * as SC from './TtnInfo.styled';

export const TtnInfo = memo(() => {
  const { ttnNumber } = useGetSearchParams();
  // const [serchParams] = useSearchParams();
  // const ttnNumber = serchParams.get('ttnNumber') ?? '';

  const { data } = useDetermineTTN(ttnNumber);

  return (
    <SC.Section>
      <h2 className="visually-hidden"> Інформація про відправлення </h2>
      {data ? (
        <>
          <SC.TextInfo>
            <SC.TitleInfo>Статус доставки: </SC.TitleInfo>
            {Array.isArray(data) && data[0].Status}.
          </SC.TextInfo>
          <SC.TextInfo>
            <SC.TitleInfo>Відправлено: </SC.TitleInfo>
            {Array.isArray(data) && data[0].WarehouseSender}.
          </SC.TextInfo>
          <SC.TextInfo>
            <SC.TitleInfo> Отримано: </SC.TitleInfo>
            {Array.isArray(data) && data[0].WarehouseRecipient}:
            {Array.isArray(data) && data[0].WarehouseRecipientAddress}.
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
