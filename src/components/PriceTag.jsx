import styled from 'styled-components';

export default function PriceTag() {
  return (
    <ProductPrice>
      <div>
        €39<span>.99999</span>
      </div>
    </ProductPrice>
  );
}

const ProductPrice = styled.h3`
  background-color: var(--organisms-bg);
  font-size: 8px;
  letter-spacing: 2px;
  font-weight: 600;
  position: absolute;
  top: 50px;
  left: 0px;
  width: fit-content;
  padding: 0px 3px;
  border-radius: 2px;
  z-index: 1;
  span {
    font-size: 6px;
    font-family: var(--font-italic);
  }
`;
