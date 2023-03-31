import styled from 'styled-components';
import ProductCard from './ProductCard';
const products = [
  {
    name: 'atoms',
    fullname: 'Atomic Harvest',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514',
    uid: 'atoms',
    price: '39',
    tag: 'Behold the miracle of Atomic Harvest!',
    description:
      'Behold the miracle of the Atomic Harvest! Outlast civilization with some indestructible debris. Buy today and add your contribution to the heap!',
  },
  {
    name: 'molecules',
    fullname: 'Molecular Overhaul',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030',
    uid: 'molecules',
    price: '44',
    tag: 'What has nature ever done for you? We deliver!',
    description:
      'Harvested direct from the ocean floor, Molecular Overhaul transforms the world around you. Join the race to the bottom!',
  },
  {
    name: 'organisms',
    fullname: 'Organism Overdrive',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119',
    uid: 'organisms',
    price: '47',
    tag: 'Introducing the indestructible organism!',
    description:
      'Introducing the indestructible organism!. Accidentally created in a lab, it defies environmental pressures. Let this evolutionary wonder reign supreme!',
  },
  {
    name: 'ecosystems',
    fullname: 'Biome Shift',
    image:
      'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557',
    uid: 'ecosystems',
    price: 59,
    tag: 'Step aside, Mother Nature!',
    description:
      "Step aside, Mother Nature! \nThe ultimate survivor is here to upend the natural order. Don't settle for outdated ecosystems. Order now and join the revolution!",
  },
];
export default function ProductGrid() {
  return (
    <Container>
      {products.map((item, index) => {
        return <ProductCard key={index} product={item} />;
      })}
    </Container>
  );
}

const Container = styled.main`
  height: 100%;
  width: 850px;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 940px) {
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
