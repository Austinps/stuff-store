import styled from 'styled-components';
import '../App.css';
export default function ProductCard({ product }) {
  return (
    <Card id={product.name}>
      <ButtonContainer>
        <Button>Add to Cart</Button>
      </ButtonContainer>

      <ProductInfo>
        <h1>{product.name}</h1>
        <hr />
        <ProductDescription>
          <p>
            {product.description}
            <Span>{product.description}</Span>
            <Span>{product.description}</Span>
          </p>
        </ProductDescription>
      </ProductInfo>
      <PrinceContainer></PrinceContainer>
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
  margin-bottom: 5rem;
`;
const ProductDescription = styled.p`
  font-size: 20px;
  p {
    word-break: break-all;
    hyphens: auto;
    opacity: 80%;
  }
`;
const ProductImage = styled.div`
  height: 230px;
  width: 100%;
  transform: translate(0, -1.5rem);
  transition: transform 500ms ease-in-out;
  filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4));
  position: absolute;
  top: 15rem;

  // &:hover {
  //   transform: translate(10.5rem, -1.5rem);
  //   transition: transform 500ms ease-in-out;
  // }
`;

const ProductInfo = styled.div`
  text-align: left;
`;

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  color: var(--text);
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.8rem;
`;
const PrinceContainer = styled.div`
  position: absolute;
  bottom: 1px;
  right: 10px;
`;
const MainSubtitle = styled.h2`
  position: absolute;
  font-family: var(--italic-font);
  font-weight: 400;
  font-size: 32px;
  margin-top: 14px;
  margin-bottom: 60px;
  text-align: center;
  bottom: 1px;
  right: 10px;
`;

const MainContentSubtitle = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const Span = styled.span`
  opacity: 30%;
`;
