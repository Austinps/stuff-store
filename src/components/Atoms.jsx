import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import LeftSide from './LeftSide';
import Card from './Card';
import CardSection from './CardSection';

export default function AtomsPage() {
  return (
    <Wrapper>
      {/* <LeftSide /> */}
      <CardSection />
      <PageCountMobile>
        <AiOutlineArrowLeft />
        1 / 4<AiOutlineArrowRight />
      </PageCountMobile>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 42px 0 30px;
  display: flex;
  flex-grow: 1;
  position: relative;
  margin-bottom: 3rem;

  @media screen and (max-width: 940px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 20rem;
  }
`;

// const Header = styled.h3`
//   text-transform: uppercase;
//   font-size: 8px;
//   letter-spacing: 4px;
//   font-weight: 600;
//   text-align: center;
//   position: absolute;
//   padding: 0 0 0 10px;

//   @media screen and (max-width: 940px) {
//     display: none;
//   }
// `;

const PageCountMobile = styled.h2`
  font-weight: 400;
  font-size: 15px;
  display: none;

  @media screen and (max-width: 940px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 7rem;

    bottom: -100px;
    right: 25%;
  }
`;

const ScrollIconDesktop = styled.h2`
  font-family: var(--italic-font);
  font-weight: 400;
  font-size: 20px;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;
