import CardOutline from './CardOutline';
import { useParams } from 'react-router-dom';
import Card from './Card';
import { products } from '../../data/products';

export default function CardSection() {
  const { id } = useParams();
  const displayedItem = products.find((item) => item.slug === id);

  return (
    <CardOutline>
      <Card product={displayedItem} />
    </CardOutline>
  );
}
