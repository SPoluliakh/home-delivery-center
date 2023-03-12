import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.navBcg};
  border: ${p => p.theme.borders.statusForm};
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[3]}px;

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
export const Button = styled.button`
  font-family: inherit;
  margin-top: ${p => p.theme.space[3]}px;
  cursor: pointer;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.navBcg};
  transition: 300ms linear;

  :hover {
    background-color: ${p => p.theme.colors.hoverBtn};
    color: ${p => p.theme.colors.spanText};
  }

  @media (min-width: 768px) {
    margin-top: ${p => p.theme.space[0]}px;
    margin-left: ${p => p.theme.space[3]}px;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  border: ${p => p.theme.borders.none};
  border-bottom: ${p => p.theme.borders.statusForm};
  font-size: ${p => p.theme.fontSizes.m}px;
  background-color: transparent;
  outline: none;
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[3]}px;

  ::placeholder {
    font-family: inherit;
  }

  @media (min-width: 768px) {
    margin-right: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  }
`;
