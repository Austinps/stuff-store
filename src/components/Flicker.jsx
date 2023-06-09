import styled from 'styled-components';

export default function Flicker({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neon-text-color);
  font-family: 'Exo 2', sans-serif;
  font-size: 0.5rem;
  font-weight: 200;
  font-style: italic;
  color: #fff;

  animation: flicker 2s infinite alternate;

  &::-moz-selection {
    background-color: var(--neon-border-color);
    color: var(--neon-text-color);
  }

  &::selection {
    background-color: var(--neon-border-color);
    color: var(--neon-text-color);
  }

  &:focus {
    outline: none;
  }

  /* Animate neon flicker */
  @keyframes flicker {
    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
        0 0 2rem var(--neon-text-color), 0 0 4rem var(--neon-text-color),
        0 0 6rem var(--neon-text-color), 0 0 8rem var(--neon-text-color),
        0 0 10rem var(--neon-text-color);

      box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff,
        0 0 2rem var(--neon-border-color),
        inset 0 0 2rem var(--neon-border-color),
        0 0 2rem var(--neon-border-color),
        inset 0 0 4rem var(--neon-border-color);
    }

    20%,
    24%,
    55% {
      text-shadow: none;
      box-shadow: none;
    }
  }
`;
