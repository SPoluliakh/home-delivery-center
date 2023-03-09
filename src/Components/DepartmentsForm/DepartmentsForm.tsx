import { FormEvent } from 'react';
// import { useLazyGetDepartmentsListQuery } from '../../Redux/departmentsApiOperations/departmentsApiOperations';

export const DepartmentsForm = () => {
  // const [getDepartments, { data }] = useLazyGetDepartmentsListQuery();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // getDepartments();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Місто
          <input
            type="text"
            placeholder="Київ"
            //   value={inputValue}
            //   onChange={onChange}
          />
        </label>
        <label>
          Номер відділення
          <input
            type="text"
            placeholder="151 (поле не обов'язкове)"
            //   value={inputValue}
            //   onChange={onChange}
          />
        </label>
        <button type="submit">Пошук</button>
      </form>
    </>
  );
};
