import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Card from './Card';

export default function CardSection() {
  return (
    <Center>
      <AiOutlineArrowLeft />
      <Card />
      <AiOutlineArrowRight />
      <PageCountDesktop>1 / 4</PageCountDesktop>
    </Center>
  );
}

const Center = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;
  position: relative;
  flex-shrink: 0;

  @media screen and (max-width: 940px) {
    margin-left: 0;
    margin-bottom: 56px;
  }
  .bottle-bg {
    width: 320px;
    height: 450px;
    object-fit: cover;
    border-radius: 160px;
    opacity: 0%;
  }
  // @media screen and (max-width: 940px) {
  //   .bottle-bg {
  //     width: 260px;
  //     height: 390px;
  //   }
  // }
  @media screen and (max-width: 940px) {
    .bottle-bg {
      width: 220px;
      height: 340px;
    }
  }
  .bottle-img {
    position: absolute;
    top: 30%;
    left: 0;
    transform: scale(1.4);
  }
`;

const PageCountDesktop = styled.h2`
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  right: 100px;
  bottom: 0px;
  text-align: center;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;
