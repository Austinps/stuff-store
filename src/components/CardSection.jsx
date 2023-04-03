import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Card from './Card';
import ColorPicker from './ColorPicker';

export default function CardSection() {
  return (
    <Center>
      <AiOutlineArrowLeft size='1.3rem' />
      <Card />
      <AiOutlineArrowRight size='1.3rem' />
      <ColorPickerBox>
        <ColorPicker />
      </ColorPickerBox>
    </Center>
  );
}

const Center = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  flex-shrink: 0;

  @media screen and (max-width: 940px) {
    margin-left: 0;
    margin-bottom: 56px;
  }
`;
const ColorPickerBox = styled.div`
  position: absolute;
  width: 80%;
  bottom: -5px;
  left: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageCountDesktop = styled.h3`
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
  bottom: -26px;
  right: 10px;
  text-align: center;
`;
