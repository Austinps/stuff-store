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
`;

const PageCountDesktop = styled.h2`
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  right: 100px;
  bottom: 0px;
  text-align: center;

  @media screen and (max-width: 940px) {
    bottom: 0;
  }
`;
