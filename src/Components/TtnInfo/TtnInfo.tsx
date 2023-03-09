import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDetermineTTN } from '../../hooks/useDetermineTTN';

export const TtnInfo = memo(() => {
  const [serchParams] = useSearchParams();
  const ttnNumber = serchParams.get('ttnNumber') ?? '';

  const { data } = useDetermineTTN(ttnNumber);

  return (
    <>
      {data ? (
        <>
          <p>Статус доставки: {Array.isArray(data) && data[0].Status}</p>
          <p>Відправлено: {Array.isArray(data) && data[0].WarehouseSender}</p>
          <p>
            Отримано: {Array.isArray(data) && data[0].WarehouseRecipient}:
            {Array.isArray(data) && data[0].WarehouseRecipientAddress}
          </p>
        </>
      ) : (
        <p> Введіть номер накладної, або виберіть зі списку</p>
      )}
    </>
  );
});
