import styled from 'styled-components';
import Logo from '../Logo';
// import { FaHamburger } from 'react-icons/fa';
import NavIcons from './NavIcons';
import NavMenu from './NavMenu';

export default function Navigation() {
  return (
    <Header>
      <Logo />
      <NavMenu />
      <HamburgerBox>
        <FaHamburger size='1.5rem' />
      </HamburgerBox>
      <NavIcons />
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

  @media (max-width: 740px) {
    .header {
      width: calc(100% + 20px);
      margin-left: -10px;
    }
  }
`;

// const HamburgerBox = styled.div`
//   display: none;

//   @media screen and (max-width: 740px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;
