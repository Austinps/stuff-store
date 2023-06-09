import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';

export default function CardHeader({ name, subname, price }) {
  return (
    <Wrapper>
      <ProductTitle>
        <div>
          <h2>
            {name} <span>{subname || 'Harvest'}</span>
          </h2>
          <h3>
            €{price}
            <span>.99</span>
          </h3>
        </div>
        <div>
          <MdAddShoppingCart size='1.7rem' />
        </div>
      </ProductTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ProductTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 600;
  margin-right: 1rem;
  width: 85%;

  @media screen and (max-width: 940px) {
    width: 90%;
  }

  div {
    display: flex;
    flex-direction: column;
    font-size: 11px;

    h2 {
      span {
        font-size: 12px;
      }
    }

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
