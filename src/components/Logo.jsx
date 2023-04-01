import styled from 'styled-components';
import { AiFillRobot } from 'react-icons/ai';

export default function Logo() {
  return (
    <Wrapper>
      <MainTitleLeft>Plastic</MainTitleLeft>
      <AiFillRobot size='1.5rem' />
      <MainTitle>Stuff</MainTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-family: var(--italic-font);
  font-weight: 400;
  line-height: 1em;
  display: block;
  font-size: 18px;
  margin-left: 0.3rem;
`;
const MainTitleLeft = styled.h1`
  font-weight: 400;
  line-height: 1em;
  display: block;
  font-size: 8px;
  margin-right: 0.3rem;
`;
