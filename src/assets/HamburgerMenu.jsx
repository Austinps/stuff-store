import styled from 'styled-components';

export default function HamburgerMenu() {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h8m-8 6h16'
      />
    </svg>
  );
}

const MobileMenu = styled.div`
  font-family: var(--italic-font);
  font-size: 30px;
  font-weight: 400;
  line-height: 1em;
  margin-left: 0.3rem;
`;
