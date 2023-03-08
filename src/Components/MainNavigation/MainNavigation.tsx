import { navigationList } from '../../helpers/navigationList';
import { CustomLink } from '../CustomLink/CustomLink';

export const MainNavigation = () => {
  return (
    <nav>
      <ul>
        {navigationList.map(({ href, name, id }) => (
          <li key={id}>
            <CustomLink to={href}> {name} </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
