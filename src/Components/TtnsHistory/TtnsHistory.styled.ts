import styled from 'styled-components';

export const Section = styled.section`
  border: ${p => p.theme.borders.statusForm};
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const List = styled.ul`
  list-style: none;
  margin-top: ${p => p.theme.space[2]}px;
  max-height: 240px;
  overflow-y: auto;

  @media (min-width: 768px) {
    max-height: 450px;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  transition: 300ms linear;
  display: flex;
  justify-content: space-between;

  :hover,
  :active {
    color: ${p => p.theme.colors.button};
  }

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: ${p => p.theme.space[2]}px;
  transition: 300ms linear;

  :hover {
    color: red;
  }
`;
