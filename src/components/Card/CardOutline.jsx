import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ColorPicker from './ColorPicker';

export default function CardOutline({ children }) {
  return (
    <Wrapper>
      <AiOutlineArrowLeft size='1.3rem' />
      {children}
      <AiOutlineArrowRight size='1.3rem' />
      <ColorPickerBox>
        <ColorPicker />
      </ColorPickerBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const ColorPickerBox = styled.div`
  position: absolute;
  bottom: -15px;
  left: 15px;
`;
