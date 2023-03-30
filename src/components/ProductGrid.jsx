import styled from 'styled-components';
import ProductCard from './ProductCard';
const products = [
  {
    name: 'beach',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514',
  },
  {
    name: 'coral',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119',
  },
  {
    name: 'glacier',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030',
  },
  {
    name: 'savanna',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557',
  },
];
export default function ProductGrid() {
  return (
    <Container>
      {products.map((item, index) => {
        return <ProductCard key={index} product={item} />;
      })}

      {/* <Card id='beach'>
        <ProductInfo>
          <h2>Beach</h2>
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
            src='https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514'
            alt='OFF-white Red Edition'
            draggable='false'
          />
        </ProductImage>
      </Card>
      <Card id='coral'>
        <ProductInfo>
          <h2>Coral</h2>
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
        <ProductImage>
          <img
            src='https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119'
            draggable='false'
          />
        </ProductImage>
        <Button className='buy-btn'>Buy Now</Button>
      </Card>
      <Card id='glacier'>
        <ProductInfo>
          <h2>Glacier</h2>
          <div className='price'>€39.99</div>
        </ProductInfo>
        <ButtonContainer>
          <Button className='buy-btn'>Buy Now</Button>
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
        <ProductImage>
          <img
            src='https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030'
            alt='OFF-white Red Edition'
            draggable='false'
          />
        </ProductImage>
      </Card>
      <Card id='savanna'>
        <ProductInfo>
          <h2>Savanna</h2>
          <div className='price'>€39.99</div>
        </ProductInfo>
        <ButtonContainer>
          <Button className='buy-btn'>Buy Now</Button>
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
        <ProductImage>
          <img
            src='https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557'
            alt='OFF-white Red Edition'
            draggable='false'
          />
        </ProductImage>
      </Card> */}
    </Container>
  );
}

const Container = styled.main`
  height: 100%;
  width: 850px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    padding: 2rem 0;
    width: 100%;
    flex-direction: column;
    gap: 3rem;
  }
`;

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
  margin: 1rem;
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
