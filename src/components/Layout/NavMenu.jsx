import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Flicker from '../Flicker';

const links = [
  { path: '/', text: 'atom' },
  { path: '/molecules', text: 'molecule' },
  { path: '/organisms', text: 'organism' },
  { path: '/ecosystems', text: 'ecosystem' },
];

export default function NavMenu() {
  const { pathname } = useLocation();
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  return (
    <HeaderMenu>
      {links?.map((item) => (
        <NavLink to={item.path}>
          {pathname === item.path ? capitalize(item.text) : item.text}
        </NavLink>
      ))}
    </HeaderMenu>
  );
}

const HeaderMenu = styled.div`
  // text-transform: uppercase;
  font-size: 11px;
  width: 355px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 740px) {
    display: none;
  }
`;