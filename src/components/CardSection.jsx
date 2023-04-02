import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Card from './Card';
import ColorPicker from './ColorPicker';

export default function CardSection() {
  return (
    <Center>
      <AiOutlineArrowLeft />
      <Card />
      <AiOutlineArrowRight />
      <BottomControls>
        <ColorPickerDesktop>
          <ColorPicker />
        </ColorPickerDesktop>
        <PageCountDesktop>1 / 4</PageCountDesktop>
      </BottomControls>
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
const BottomControls = styled.div`
  position: absolute;
  width: 350px;
  bottom: 0px;
  left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PageCountDesktop = styled.h2`
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 600;

  text-align: center;

  @media screen and (max-width: 940px) {
    bottom: 0;
  }
`;

const ColorPickerDesktop = styled.h2`
  font-weight: 400;
  font-size: 16px;

  text-align: center;

  @media screen and (max-width: 940px) {
    bottom: 0;
  }
`;
