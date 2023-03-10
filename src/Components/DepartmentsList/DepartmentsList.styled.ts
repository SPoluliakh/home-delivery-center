import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    margin-right: -20px;
  }
`;
