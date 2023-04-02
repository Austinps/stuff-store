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
  font-size: 0.9rem;
  //   color: var(--organisms-bg);
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border: var(--organisms-bg) 0.125em solid;
  padding: 0.5em 1em 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.25em 0 var(--organisms-bg), 0 0 0.5em 0 var(--organisms-bg);
  position: absolute;
  bottom: 4px;
  right: 10px;
  /*   transition: background-color 100ms linear; */

  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: var(--organisms-bg);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.3;
  }

  &:hover,
  &:focus {
    /*   background: var(--organisms-bg); */
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
    box-shadow: 0 0 2em 0.5em var(--organisms-bg);
    background-color: var(--organisms-bg);
    z-index: -1;
    opacity: 0;
    transition: opacity 100ms linear;
  }

  &:hover::before,
  &:focus::before {
    opacity: 0.5;
  }
  &:hover::after,
  &:focus::after {
    opacity: 0.7;
  }
`;
