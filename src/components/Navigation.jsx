import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiFillRobot } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';
import CartIcon from '../assets/CartIcon';
import ProfileIcon from '../assets/ProfileIcon';
import SearchIcon from '../assets/SearchIcon';
import { useLocation } from 'react-router-dom';

const links = [
  { path: '/', text: 'atoms' },
  { path: '/molecules', text: 'molecules' },
  { path: '/organisms', text: 'organisms' },
  { path: '/ecosystems', text: 'ecosystems' },
  { path: '/products', text: 'products' },
  { path: '/shop', text: 'shop' },
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
          <NavLink to={item.path} activeClassName='active'>
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
  justify-content: space-between;
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

  @media (max-width: 575px) {
    .header {
      width: calc(100% + 20px);
      margin-left: -10px;
    }
  }
`;

const HeaderMenu = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 740px) {
    display: none;
  }
  a:not(:first-child) {
    margin-left: 30px;
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

  @media screen and (max-width: 740px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
