import { useState } from 'react';
import CardOutline from './CardOutline';
import { useParams } from 'react-router-dom';
import Card from './Card';
import { products } from '../../data/products';

export default function CardSection() {
  const [size, setSize] = useState('medium');
  
  let { id = 'atoms' } = useParams();
  const displayedItem = products.find((item) => item.slug === id);

  return (
    <>
      <CardOutline>
        <Card product={displayedItem} />
      </CardOutline>
    </>
  );
}
