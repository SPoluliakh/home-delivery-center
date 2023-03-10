import styled from 'styled-components';

export const Item = styled.li`
  border-bottom: ${p => p.theme.borders.statusForm};
  border-top: ${p => p.theme.borders.statusForm};
  padding: ${p => p.theme.space[2]}px;

  @media (min-width: 768px) {
    flex-basis: calc(100% / 2 - 20px);
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  background-color: ${p => p.theme.colors.natrul};
  cursor: pointer;
  margin: ${p => p.theme.space[2]}px 0;
  transition: 300ms linear;

  :hover {
    scale: 1.3;
  }
`;

export const InnerList = styled.ul`
  list-style: none;
  text-align: center;
`;

export const TitleInfo = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.mm}px;
  text-indent: 20px;
`;
