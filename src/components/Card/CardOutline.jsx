import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ColorPicker from '../common/ColorPicker';

export default function CardOutline({ children }) {
  return (
    <Wrapper>
      <LeftArrow>
        <AiOutlineArrowLeft size='1.53rem' />
      </LeftArrow>
      {children}
      <RightArrow>
        <AiOutlineArrowRight size='1.5rem' />
      </RightArrow>
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
  left: 25  px;
`;

const LeftArrow = styled.div`
  z-index: 101;
`;

const RightArrow = styled.div`
  z-index: 101;
`;
