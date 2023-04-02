import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';
import ColorPicker from './ColorPicker';

export default function CardHeader() {
  return (
    <Wrapper>
      <LeftHeader>
        <h3>Atomic Harvest</h3>
        <Subtitle>
          Sport <span>900ml</span>
        </Subtitle>
        <ColorWrapper>
          <ColorPicker />
        </ColorWrapper>
      </LeftHeader>
      <ProductPrice>
        <div>
          €39<span>.99999</span>
        </div>
      </ProductPrice>
      <CartIcon>
        <MdAddShoppingCart size='1.5rem' />
      </CartIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const ColorWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`;

const LeftHeader = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;

  letter-spacing: 2px;
  font-weight: 600;
  margin: 15px;
  margin-right: 1rem;

  h3 {
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 940px) {
  }
`;
const Subtitle = styled.span`
  text-transform: uppercase;
  font-size: 8px;
  span {
    font-size: 7px;
  }
`;

const ProductPrice = styled.h3`
  background-color: var(--organisms-bg);
  position: absolute;
  top: 62px;
  right: 10px;
  width: fit-content;
  display: flex;
  border-radious: 5px;
  justify-content: space-between;
  align-items: flex-end;
  text-transform: uppercase;
  padding: 2px 3px;
  border-radius: 2px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 600;

  span {
    font-size: 6px;
    font-family: var(--font-italic);
  }
`;

const CartIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  // border: 1px solid black;
  padding: 5px;
  border-radius: 2px;
`;
