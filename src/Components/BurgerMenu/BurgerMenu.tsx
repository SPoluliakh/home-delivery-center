import { useEffect } from 'react';
import { navigationList } from '../../helpers/navigationList';
import { CustomLink } from '../CustomLink/CustomLink';
import * as SC from './BurgerMenu.styled';

interface IProps {
  toggleMenu: () => void;
  isshowMenu: boolean;
}

export const BurgerMenu = ({ toggleMenu, isshowMenu }: IProps) => {
  useEffect(() => {
    if (isshowMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isshowMenu]);

  return (
    <>
      <SC.Container
        onClick={toggleMenu}
        className={isshowMenu ? 'enter' : 'out'}
      >
        <SC.MainNav>
          <SC.List>
            {navigationList.map(({ href, name, id }) => (
              <SC.ListItem key={id}>
                <CustomLink to={href}>{name}</CustomLink>
              </SC.ListItem>
            ))}
          </SC.List>
        </SC.MainNav>
      </SC.Container>
    </>
  );
};
