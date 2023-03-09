import { ChangeEvent, FormEvent } from 'react';

interface IProps {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const StatusForm = ({ onSubmit, inputValue, onChange }: IProps) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          TTN number
          <input
            type="text"
            placeholder="59000509805747"
            value={inputValue}
            onChange={onChange}
          />
        </label>
        <button type="submit">Get status TTN</button>
      </form>
    </>
  );
};
