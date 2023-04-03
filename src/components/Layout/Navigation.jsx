import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../common/Logo';
import NavIcons from './NavIcons';
import NavMenu from './NavMenu';
import { useViewport } from '../../hooks/useViewport';
import { FaHamburger } from 'react-icons/fa';

export default function Navigation() {
  const { width } = useViewport();
  const breakpoint = 740;
  return (
    <>
      <Header>
        {width <= breakpoint ? <FaHamburger size='1.5rem' /> : null}
        <NavLink to='/'>
          <Logo />
        </NavLink>
        {width > breakpoint ? <NavMenu /> : null}
        <NavIcons />
      </Header>
    </>
  );
}

const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--bg-color);
  height: 72px;
  flex-shrink: 0;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 6;
  }
`;
