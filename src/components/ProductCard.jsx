import styled from 'styled-components';

export default function ProductCard({ product }) {
  return (
    <Card id={product.name}>
      <ProductInfo>
        <h2>{product.name}</h2>
      </ProductInfo>
      <ButtonContainer>
        <Button className='fav'>
          <svg
            className='svg'
            id='i-star'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
          >
            <path d='M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z' />
          </svg>
        </Button>
      </ButtonContainer>
      <MainSubtitle>€ 39.90</MainSubtitle>
      <ProductImage>
        <img
          src={product.image}
          alt='OFF-white Red Edition'
          draggable='false'
        />
      </ProductImage>
    </Card>
  );
}

const Card = styled.section`
  position: relative;
  padding: 1rem;
  width: 350px;
  height: 450px;
  box-shadow: -1px 15px 30px -12px rgb(32, 32, 32);
  border-radius: 0.9rem;
  background-color: var(--bg-beach);
  color: var(--text);
  cursor: pointer;
  margin: 2rem;
`;

const ProductImage = styled.div`
  height: 230px;
  width: 100%;
  transform: translate(0, -1.5rem);
  transition: transform 500ms ease-in-out;
  filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4));
`;

const ProductInfo = styled.div`
  text-align: center;

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    margin: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Button = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  color: var(--text);
  cursor: pointer;

  .btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.8rem;
  }

  .buy-btn {
    background-color: var(--btn);
    padding: 0.6rem 3.5rem;
    font-weight: 600;
    font-size: 1rem;
    transition: 300ms ease;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .buy-btn:hover {
    background-color: var(--btn-hover);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.8rem;
`;

const MainSubtitle = styled.h2`
  font-family: var(--italic-font);
  font-weight: 400;
  font-size: 32px;
  margin-top: 14px;
  margin-bottom: 60px;
  text-align: center;
`;

const MainContentSubtitle = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  text-align: center;
`;
