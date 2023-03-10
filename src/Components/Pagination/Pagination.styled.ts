import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  text-align: center;
`;

export const Count = styled.span`
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
  font-family: inherit;
  cursor: pointer;
  transition: 300ms linear;

  :hover {
    scale: 1.3;
  }
`;
