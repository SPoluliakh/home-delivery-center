import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.statusForm};
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
`;
