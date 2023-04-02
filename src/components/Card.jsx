import styled from 'styled-components';
import { CgScrollV } from 'react-icons/cg';
import { MdAddShoppingCart } from 'react-icons/md';
import img from '../assets/atoms2.webp';
import ColorPicker from './ColorPicker';
import { desktopText, mobileText } from '../data/bgText';
import CardHeader from './CardHeader';
import CardBoby from './CardBody';
export default function Card() {
  return (
    <CardBoby>
      <CardHeader />
    </CardBoby>
  );
}
