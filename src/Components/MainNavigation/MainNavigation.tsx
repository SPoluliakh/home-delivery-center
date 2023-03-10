import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { navigationList } from '../../helpers/navigationList';
import { CustomLink } from '../CustomLink/CustomLink';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import * as SC from './MainNavigation.styled';

let innerWidth: boolean = window.innerWidth >= 768;

export const MainNavigation = () => {
  const [isshowMenu, setIsShowMenu] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsShowMenu(!isshowMenu);
  };
  return (
    <nav>
      {!innerWidth && (
        <SC.BurgerButton onClick={toggleMenu} type="button">
          <FaAlignJustify size="24" fill="brown" />
        </SC.BurgerButton>
      )}

      {!innerWidth && (
        <BurgerMenu toggleMenu={toggleMenu} isshowMenu={isshowMenu} />
      )}
      {innerWidth && (
        <SC.List>
          {navigationList.map(({ href, name, id }) => (
            <SC.Item key={id}>
              <CustomLink to={href}> {name} </CustomLink>
            </SC.Item>
          ))}
        </SC.List>
      )}
    </nav>
  );
};
