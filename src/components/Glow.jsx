import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Glow() {
  return (
    <IconBox>
      <MdAddShoppingCart />
    </IconBox>
  );
}

const IconBox = styled.a`
  z-index: 100;
  font-size: 1rem;
  color: var(--clr-neon);
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border: var(--clr-neon) 0.125em solid;
  padding: 0.35em 1em 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);
  position: absolute;
  bottom: 2px;
  right: 14px;
  /*   transition: background-color 100ms linear; */

  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: var(--clr-neon);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }

  &:hover,
  &:focus {
    /*   background: var(--clr-neon); */
    color: var(--clr-bg);
    text-shadow: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 2em 0.5em var(--clr-neon);
    background-color: var(--clr-neon);
    z-index: -1;
    opacity: 0;
    transition: opacity 100ms linear;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
`;
