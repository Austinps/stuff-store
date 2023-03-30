import styled from 'styled-components';
import ArrowIcon from '../assets/ArrowIcon';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function ProductPage({ product }) {
  const { name, image, page } = product;
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  return (
    <Wrapper>
      <LeftSide>
        <Content>
          <Header>Plastic</Header>
          <MainTitle>Stuff</MainTitle>

          <HeroText>
            It takes 500 years for our plastic bottles to decompose.
          </HeroText>
          <div className='more-menu'>
            Shop Now
            <ArrowIcon />
          </div>
        </Content>
      </LeftSide>
      <Center>
        <AiOutlineArrowLeft />
        <Card id={name}>
          <ProductTitle>{capitalize(name)}</ProductTitle>
          <hr />
          <CardText>
            Lorem pollution dolor sit amet, disposable sadipscing elitr, sed
            diam nonumy eirmod toxic invidunt ut garbage et dolore landfill
            aliquyam erat, sed diam non-biodegradable. At vero plastic pollution
            et accusam et justo duo dolores et ea microplastics. Stet clita kasd
            gubergren, no sea takimata overconsumption est Lorem plastic bags
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut plastic packaging
            et dolore plastic waste erat, sed diam harmful. At vero eos et
            accusam et justo duo dolores et ea single-use. Stet clita kasd
            gubergren, no sea takimata environmental plastic debris. Lorem ipsum
            dolor sit amet, harmful sadipscing elitr, sed eirmod tempor invidunt
            plastic straws dolore magnadegradation.
          </CardText>
          <CardTextMobile>
            Lorem ipsum dolor amet, toxic sadipscing elitr eirmod plastic
            pollution invidunt ut landfill waste , sed diam non-biodegradable.
            At vero plastic oceans et accusam et justo duo microplastics et ea
            plastic bottles. Stet clita kasd gubergren overconsumption est Lorem
            plastic bags plastic packaging et dolore plastic debris erat, sed
            diam harmful. At vero eos et accusam et justo duo dolores et ea
            plastic straws. Stet est environmental degradation. Lorem ipsum
            dolor sit amet, harmful sadipscing elitr, plastic pollution
            single-use erat, sed diam non-recyclable.
          </CardTextMobile>

          <img className='bottle-bg' src='' alt='' />
          <img className='bottle-img' src={image} />
        </Card>
        <AiOutlineArrowRight />
      </Center>

      <PageCountMobile>{`${page} / 4`}</PageCountMobile>
      <PageCountDesktop>{`${page} / 4`}</PageCountDesktop>

      <MainTitleMobile>Stuff</MainTitleMobile>
      <HeaderMobile>Plastic</HeaderMobile>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 42px 0 30px;
  display: flex;
  flex-grow: 1;
  position: relative;
  margin-bottom: 5rem;

  @media screen and (max-width: 930px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.h3`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 600;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const ProductTitle = styled.h3`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 600;
`;

const HeaderMobile = styled.h3`
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 4px;
  font-weight: 600;
  display: none;

  @media screen and (max-width: 930px) {
    display: block;
  }
`;

const MainTitle = styled.h1`
  font-family: var(--italic-font);
  font-size: 100px;
  font-weight: 400;
  line-height: 1em;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const MainTitleMobile = styled.h1`
  font-family: var(--italic-font);
  font-size: 70px;
  font-weight: 400;
  line-height: 0.7em;
  display: none;

  @media screen and (max-width: 930px) {
    display: block;
  }
`;

const PageCountDesktop = styled.h2`
  font-family: var(--italic-font);
  font-weight: 400;
  font-size: 20px;
  position: absolute;
  right: 20px;
  bottom: 5px;
  text-align: center;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const Content = styled.div`
  margin: 2rem;
  margin-left: 5rem;
  .more-menu {
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    text-decoration: underline;
  }
  @media screen and (max-width: 930px) {
    .more-menu {
      justify-content: center;
    }
  }
  .more-menu svg {
    width: 28px;
    height: 18px;
    margin-left: 10px;
  }
`;

const HeroText = styled.div`
  font-size: 26px;
  font-family: var(--italic-font);
  font-style: italic;
  margin-bottom: 14px;
  margin-top: 2rem;

  @media screen and (max-width: 930px) {
    margin-top: 1rem;
  }
`;

const PageCountMobile = styled.h2`
  font-family: var(--italic-font);
  font-weight: 400;
  font-size: 15px;
  display: none;

  @media screen and (max-width: 930px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    text-align: center;
  }
`;

const CardText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
  letter-spacing: -0.01em;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;
const CardTextMobile = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  display: none;

  @media screen and (max-width: 930px) {
    display: block;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  margin-left: 120px;
  position: relative;
  flex-shrink: 0;

  @media screen and (max-width: 930px) {
    margin-left: 0;
    margin-bottom: 56px;
  }
  .bottle-bg {
    width: 320px;
    height: 450px;
    object-fit: cover;
    border-radius: 160px;
    opacity: 0%;
  }
  @media screen and (max-width: 930px) {
    .bottle-bg {
      width: 260px;
      height: 390px;
    }
  }
  @media screen and (max-width: 575px) {
    .bottle-bg {
      width: 220px;
      height: 340px;
    }
  }
  .bottle-img {
    position: absolute;
    top: 25%;
    left: 0;
    transform: scale(1.5);
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 320px;
  @media screen and (max-width: 930px) {
    text-align: center;
    max-width: 450px;
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
  margin: 2rem;

  @media screen and (max-width: 930px) {
    width: 300px;
    height: 400px;
  }
`;
