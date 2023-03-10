import { MouseEvent } from 'react';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { windowScroll } from '../../helpers/smooseScroll';

interface IProps {
  disabled: boolean;
}

export const Pagination = ({ disabled }: IProps) => {
  const { page, city, setSearchParams } = useGetSearchParams();

  const pageCount = (evt: MouseEvent<HTMLButtonElement>) => {
    const { name } = evt.target as HTMLButtonElement;
    name === 'next'
      ? setSearchParams(
          city !== ''
            ? { page: (Number(page) + 1).toString(), city }
            : { page: (Number(page) + 1).toString() }
        )
      : setSearchParams(
          city !== ''
            ? { page: (Number(page) - 1).toString(), city }
            : { page: (Number(page) - 1).toString() }
        );

    windowScroll();
  };

  return (
    <>
      <div>
        <button
          name="prev"
          type="button"
          onClick={pageCount}
          disabled={page === '1'}
        >
          попередня
        </button>
        <p>{page}</p>
        <button
          name="next"
          type="button"
          onClick={pageCount}
          disabled={disabled}
        >
          наступна
        </button>
      </div>
    </>
  );
};
