import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: rgb(118, 118, 118);
  font-family: inherit;
  position: relative;
  text-decoration: none;
  text-shadow: ${p => p.theme.shadows.textShadow};
  transition: 300ms linear;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.mm}px;
  }

  &.active {
    color: ${p => p.theme.colors.text};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: rgb(118, 118, 118);
  }

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(118, 118, 118);
    scale: 0;
    transition: 500ms linear;
  }

  :hover::after,
  :focus::after {
    scale: 1;
  }

  &.active::after {
    background-color: ${p => p.theme.colors.text};
    scale: 1;
  }
`;
