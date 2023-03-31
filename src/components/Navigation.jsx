import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiFillRobot } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';
import CartIcon from '../assets/CartIcon';
import ProfileIcon from '../assets/ProfileIcon';
import SearchIcon from '../assets/SearchIcon';
import { useLocation } from 'react-router-dom';

const links = [
  { path: '/', text: 'atom' },
  { path: '/molecules', text: 'molecule' },
  { path: '/organisms', text: 'organism' },
  { path: '/ecosystems', text: 'ecosystem' },
];
export default function Navigation() {
  const { pathname } = useLocation();
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  return (
    <Header>
      <LogoBox>
        <AiFillRobot size='1.5rem' />
        <MainTitle>Stuff</MainTitle>
      </LogoBox>

      <HeaderMenu>
        {links?.map((item) => (
          <NavLink to={item.path}>
            {pathname === item.path ? capitalize(item.text) : item.text}
          </NavLink>
        ))}
      </HeaderMenu>
      <HamburgerBox>
        <FaHamburger size='1.5rem' />
      </HamburgerBox>
      <HeaderIcons>
        <SearchIcon />
        <ProfileIcon />
        <CartIcon />
      </HeaderIcons>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--bg-color);
  height: 72px;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 6;

  @media (max-width: 940px) {
    .header {
      width: calc(100% + 20px);
      margin-left: -10px;
    }
  }
`;

const HeaderMenu = styled.div`
  // text-transform: uppercase;
  width: 455px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const HeaderIcons = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  svg {
    width: 18px;
  }
  svg:not(:last-child) {
    margin-right: 20px;
  }
`;

const LogoBox = styled.div`
  padding: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-family: var(--italic-font);
  font-size: 30px;
  font-weight: 400;
  line-height: 1em;
  display: block;
  font-size: 15px;
  margin-left: 0.3rem;
`;

const HamburgerBox = styled.div`
  display: none;

  @media screen and (max-width: 940px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
