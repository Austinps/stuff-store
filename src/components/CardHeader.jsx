import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';
import ColorPicker from './ColorPicker';
import NeonSign from './NeonSign';
export default function CardHeader() {
  return (
    <Wrapper>
      <LeftHeader>
        {/* <h3>Atomic Harvest</h3> */}
        <NeonSign />
        <Subtitle>
          {/* Fallout <span>900ml</span> */}
        </Subtitle>
        <ColorWrapper>
          <ColorPicker />
        </ColorWrapper>
      </LeftHeader>
      <ProductPrice>
        <div>
          €39<span>.99999999</span>
        </div>
      </ProductPrice>
      <CartIcon>
        <MdAddShoppingCart size='1.5rem' />
      </CartIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px;
`;
const ColorWrapper = styled.div`
  margin-top: 20px;
`;

const LeftHeader = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;

  letter-spacing: 1px;
  font-weight: 600;

  margin-right: 1rem;

  h3 {
    font-size: 17px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 940px) {
  }
`;
const Subtitle = styled.span`
  text-transform: uppercase;

  font-size: 9px;
  span {
    font-size: 7px;
  }
`;

const ProductPrice = styled.h3`
  background-color: var(--organisms-bg);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 600;
  position: absolute;
  top: 75px;
  right: -37px;
  width: fit-content;
  padding: 0px 3px;
  border-radius: 2px;
  z-index: 1;
  span {
    font-size: 6px;
    font-family: var(--font-italic);
  }
`;

const CartIcon = styled.div`
  position: absolute;
  top: 3px;
  right: 2px;
  padding: 5px;
`;
