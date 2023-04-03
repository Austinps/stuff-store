import styled from 'styled-components';
import CartIcon from '../common/CartIcon';
import ProfileIcon from '../common/ProfileIcon';
import SearchIcon from '../common/SearchIcon';

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
