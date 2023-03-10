import { useSearchParams } from 'react-router-dom';
import { FormEvent } from 'react';
import { useLazyGetDepartmentsListQuery } from '../../Redux/departmentsApiOperations/departmentsApiOperations';
import { Loader } from '../Loader/Loader';

interface IFormElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
  id: HTMLInputElement;
}

export const DepartmentsForm = () => {
  const [getDepartments, { isLoading }] = useLazyGetDepartmentsListQuery();

  const [, setSearchParams] = useSearchParams();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { city, id } = evt.currentTarget.elements as IFormElements;
    const data = {
      city: city.value,
      id: id.value,
    };

    getDepartments(data);

    const param1 = city.value !== '';
    const param2 = id.value !== '';
    if (param1 && param2) {
      setSearchParams({ city: city.value, id: id.value });
      return;
    } else if (!param1 && param2) {
      setSearchParams({ id: id.value });
      return;
    } else if (param1 && !param2) {
      setSearchParams({ city: city.value });
      return;
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        <label>
          Місто
          <input type="text" placeholder="Київ" name="city" />
        </label>
        <label>
          Номер відділення
          <input type="text" placeholder="151 " name="id" />
        </label>
        <button type="submit">Пошук</button>
      </form>
    </>
  );
};
