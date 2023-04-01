import styled from 'styled-components';
import CartIcon from '../assets/CartIcon';
import ProfileIcon from '../assets/ProfileIcon';
import SearchIcon from '../assets/SearchIcon';

export default function NavIcons() {
  return (
    <HeaderIcons>
      <SearchIcon />
      <ProfileIcon />
      <CartIcon />
    </HeaderIcons>
  );
}

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
