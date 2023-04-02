import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';

export default function CardHeader() {
  return (
    <Wrapper>
      <ProductTitle>
        <div>
          {' '}
          <h2>Atomic Harvest</h2>
          <h3>
            €39<span>.99999</span>
          </h3>
        </div>

        <div>
          <MdAddShoppingCart size='1.7rem' />
        </div>
      </ProductTitle>

      {/* <CartIcon>
        <MdAddShoppingCart size='1.75rem' />
      </CartIcon> */}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const ColorWrapper = styled.div`
  margin-top: 15px;
`;

const ProductTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0;
  margin-right: 1rem;

  div {
    display: flex;
    flex-direction: column;
    font-size: 11px;

    h3 {
      width: content-fit;
      margin-top: 2px;
      font-size: 12px;
      background-color: var(--molecules-bg);
      padding: 2px 5px;
    }
    span {
      font-size: 8px;
    }
  }
`;
