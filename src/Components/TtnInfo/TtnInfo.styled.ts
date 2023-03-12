import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${p => p.theme.space[3]}px;

  @media (min-width: 768px) {
    border: ${p => p.theme.borders.statusForm};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[4]}px;
    width: 400px;
    background-color: ${p => p.theme.colors.navBcg};
  }
  @media (min-width: 1200px) {
    width: 700px;
  }
`;
export const TitleInfo = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.mm}px;
  text-indent: 20px;
`;

export const TextInfo = styled.p`
  text-indent: ${p => p.theme.space[3]}px;
`;
