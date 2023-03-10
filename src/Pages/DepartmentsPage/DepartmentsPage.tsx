import { useState } from 'react';
import { DepartmentsList } from '../../Components/DepartmentsList/DepartmentsList';
import { DepartmentsForm } from '../../Components/DepartmentsForm/DepartmentsForm';
import { Modal } from '../../Components/Modal/Modal';
import * as SC from './DepartmentsPage.styled';

let innerWidth: boolean = window.innerWidth >= 768;

export const DepartmentsPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {innerWidth ? (
        <DepartmentsForm />
      ) : (
        <SC.Button onClick={toggleModal} type="button">
          Шукати відділення
        </SC.Button>
      )}
      <DepartmentsList />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <DepartmentsForm toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
