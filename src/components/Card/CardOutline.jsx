import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ColorPicker from '../common/ColorPicker';

export default function CardOutline({ children, setPage, page }) {
  return (
    <Wrapper>
      <LeftArrow onClick={() => setPage(page - 1)}>
        <AiOutlineArrowLeft size='1.3rem' />
      </LeftArrow>
      {children}
      <RightArrow onClick={() => setPage(page + 1)}>
        <AiOutlineArrowRight size='1.3rem' />
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
  left: 20px;
`;

const LeftArrow = styled.div`
  z-index: 101;
`;

const RightArrow = styled.div`
  z-index: 101;
`;
