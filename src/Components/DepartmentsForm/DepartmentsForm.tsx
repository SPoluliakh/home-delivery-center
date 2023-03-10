import { useSearchParams } from 'react-router-dom';
import { FormEvent } from 'react';
import { useLazyGetDepartmentsListQuery } from '../../Redux/departmentsApiOperations/departmentsApiOperations';
import { Loader } from '../Loader/Loader';
import * as SC from './DepartmentsForm.styled';

interface IFormElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
  id: HTMLInputElement;
}

interface IProps {
  toggleModal?: () => void;
}

export const DepartmentsForm = ({ toggleModal }: IProps) => {
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
    toggleModal && toggleModal();

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
      <SC.Form onSubmit={handleSubmit}>
        <SC.Label htmlFor="citi">Місто</SC.Label>
        <SC.Input id="city" type="text" placeholder="Київ" name="city" />

        <SC.Label htmlFor="id">Номер відділення </SC.Label>
        <SC.Input id="id" type="text" placeholder="151 " name="id" />

        <SC.Button type="submit">Пошук</SC.Button>
      </SC.Form>
    </>
  );
};
