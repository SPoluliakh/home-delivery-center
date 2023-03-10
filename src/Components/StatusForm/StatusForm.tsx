import { ChangeEvent, FormEvent } from 'react';
import * as SC from './StatusForm.styled';

interface IProps {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const StatusForm = ({ onSubmit, inputValue, onChange }: IProps) => {
  return (
    <>
      <SC.Form onSubmit={onSubmit}>
        <SC.Label htmlFor="ttn">ТТН номер</SC.Label>
        <SC.Input
          id="ttn"
          type="text"
          placeholder="59000509805747"
          value={inputValue}
          onChange={onChange}
        />

        <SC.Button type="submit">Отримати статус ТТН</SC.Button>
      </SC.Form>
    </>
  );
};
