import CardOutline from './CardOutline';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Card from './Card';
import { products } from '../../data/products';

export default function CardSection() {
  const params = useParams();
  console.log('pa', params);
  const display = products.find((item) => item.slug === params.id);
  console.log(display);
  const [page, setPage] = useState(1);
  const index = page % 4;
  console.log('index', index);
  return (
    <CardOutline setPage={setPage} page={page}>
      <Card product={display} />
    </CardOutline>
  );
}
