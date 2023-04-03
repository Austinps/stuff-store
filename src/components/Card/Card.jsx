import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({ product }) {
  const { name, price, brand, img } = product;

  return (
    <CardBody img={img} brand={brand}>
      <CardHeader name={name} price={price} />
    </CardBody>
  );
}
