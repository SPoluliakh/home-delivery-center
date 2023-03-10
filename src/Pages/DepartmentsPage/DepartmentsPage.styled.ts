import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  display: block;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.space[4]}px;

  cursor: pointer;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.color};
  transition: 300ms linear;

  :hover {
    background-color: ${p => p.theme.colors.hoverBtn};
  }
`;
