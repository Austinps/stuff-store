import CardOutline from './CardOutline';
import { useParams } from 'react-router-dom';
import Card from './Card';
import { products } from '../../data/products';

export default function CardSection() {
  let { id } = useParams();
  id = id || 'atoms';
  const displayedItem = products.find((item) => item.slug === id);

  return (
    <CardOutline>
      <Card product={displayedItem} />
    </CardOutline>
  );
}
