import './Plant.css';
import styled from 'styled-components';

export default function PlantCard() {
  return (
    <div className='card'>
      <PhotoBox>
        <ProductImage>
          <img
            src={
              'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514'
            }
            alt='OFF-white Red Edition'
            draggable='false'
          />
        </ProductImage>
      </PhotoBox>
      <div className='description'>
        <h2>Classic Peace Lily</h2>
        <h4>Popular House Plant</h4>
        <h1>$18</h1>
        <p>
          Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
          planter with a blue & red ribbom and butterfly pick.
        </p>
        <button>Add to Cart</button>
        <button>Wishlist</button>
      </div>
    </div>
  );
}

const ProductImage = styled.div`
  height: 340px;
  width: 100%;
  transform: translate(0, -1.5rem);
  transition: transform 500ms ease-in-out;
  filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4));
  position: absolute;
  left: 1rem;
`;

const PhotoBox = styled.div`
  position: relative;
  padding: 30px;
  width: 45%;
  text-align: center;
  float: left;
`;
