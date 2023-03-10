import styled from 'styled-components';

export const BurgerButton = styled.button`
  background: transparent;
  border: none;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  padding: ${p => p.theme.space[2]}px;

  @media (min-width: 768px) {
  }
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;
