import styled from 'styled-components';
import ArrowIcon from '../assets/ArrowIcon';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md';
import img from '../assets/organisms3.webp';

export default function OrganismsPage() {
  return (
    <Wrapper>
      <LeftSide>
        <Content>
          <br />
          <Header>Plastic</Header>
          <MainTitle>Stuff</MainTitle>
          <HeroText>Wave goodbye to natural law!</HeroText>
          <CardTextLeft>
            ...and behold the miracle of the atomic harvest. Add your
            contribution to the heap!
          </CardTextLeft>
          <div className='more-menu'>
            Shop Now
            <ArrowIcon />
          </div>
        </Content>
      </LeftSide>
      <Center>
        <AiOutlineArrowLeft />
        <Card id='organisms'>
          <ProductTitle>
            <div>
              Organ Overdrive
              <ProductPrice>
                €39<CentPrice>.999</CentPrice>
              </ProductPrice>
            </div>
            <MdAddShoppingCart size='1.5rem' />
          </ProductTitle>

          <hr />
          <CardText>
            Lorem pollution dolor sit amet, disposable ut sadipscing elitr, sed
            diam eos nonumy eirmod toxic invidunt garbage dolore landfill
            plastic aliquyam erat, sed diam non-biodegradable. At vero plastic
            pollution et accusam et justo duo dolores et ea microplastics. Stet
            clita kasd gubergren, no sea takimata overconsumption est Lorem
            plastic bags dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing sed elitr, sed diam nonumy eirmod tempor invidunt ut
            plastic packaging et dolore plastic waste erat, sed diam harmful. At
            vero eos et accusam et justo duo dolores et ea single-use. Stet
            clita kasd gubergren, no sea takimata et environmental plastic
            debris. Lorem ipsum dolor sit amet, harmful sadipscing elitr, sed
            eirmod tempor invidunt plastic straws dolore magnadegradation. Lorem
            pollution dolor sit amet, disposable sadipscing elitr, sed diam
            nonumy eirmod toxic invidunt ut garbage et dolore landfill aliquyam
            erat, sed diam non-biodegradable. At vero plastic pollution et
            accusam et justo duo dolores et ea garbage microplastics. Stet clita
            kasd gubergren, no sea takimata overconsumption est Lorem ut plastic
            bags dolor sit amet overconsumption.
          </CardText>
          <CardTextMobile>
            Lorem ipsum dolore, toxic sadipscing eirmod plastic pollution
            invidunt toxic landfill waste, non-biodegradable. Stet vero plastic
            oceans et accusam et justo duo microplastics et ea plastic bottles.
            Stet clita kasd et accusam gubergren microplastics overconsumption
            est Lorem plastic bags plastic packaging et dolore plastic debris
            erat, sed diam harmful. At vero eos amet accusam et justo duo
            dolores et ea plastic straws. Stet est environmental degradation.
            Lorem ipsum dolor sit amet, harmful elitr, plastic pollution
            single-use erat. Lorem ipsum dolor amet sed diam, et toxic
            sadipscing elitr eirmod plastic sed pollution invidunt ut landfill
            waste, sed diam et non-biodegradable. At vero plastic oceans et
            accusam et justo duo microplastics et ea plastic bottles. Stet
            gubergren overconsumption toxic Lorem plastic bags plastic packaging
            et justo dolore plastic debris harmful.
          </CardTextMobile>

          <img className='bottle-bg' src='' alt='' />
          <img className='bottle-img' src={img} />
          <PageCountMobile>
            <AiOutlineArrowLeft />
            1 / 4<AiOutlineArrowRight />
          </PageCountMobile>
        </Card>
        <AiOutlineArrowRight />
      </Center>
      <PageCountDesktop>1 / 4</PageCountDesktop>
      <MainTitleMobile>Stuff</MainTitleMobile>
      <HeaderMobile>Plastic</HeaderMobile>{' '}
      {/* <ScrollIconDesktop>
        <CgScrollV />
      </ScrollIconDesktop> */}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 42px 0 30px;
  display: flex;
  flex-grow: 1;
  position: relative;
  margin-bottom: 5rem;

  @media screen and (max-width: 740px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 20rem;
  }
`;

const Header = styled.h3`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 600;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const ProductTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0;
  margin-right: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const ProductPrice = styled.h3`
  text-transform: uppercase;
  // background-color: var(--organisms-bg);
  padding: 5px 0;
  border-radius: 2px;
  font-size: 10px;
  letter-spacing: 4px;
  font-weight: 600;
`;
const CentPrice = styled.h3`
  text-transform: uppercase;
  // background-color: var(--organisms-bg);
  padding: 5px 0;
  border-radius: 2px;
  font-size: 7px;
  letter-spacing: 4px;
  font-weight: 600;
  display: inline;
`;
const HeaderMobile = styled.h3`
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 4px;
  font-weight: 600;
  display: none;
  position: absolute;
  top: 25px;
  left: 195px;

  @media screen and (max-width: 940px) {
    display: block;
  }
`;

const MainTitle = styled.h1`
  font-family: var(--italic-font);
  font-size: 100px;
  font-weight: 400;
  line-height: 1em;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const MainTitleMobile = styled.h1`
  font-family: var(--italic-font);
  font-size: 70px;
  font-weight: 400;
  line-height: 0.7em;
  display: none;

  @media screen and (max-width: 940px) {
    display: block;
  }
`;

const PageCountDesktop = styled.h2`
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  right: 20px;
  bottom: 5px;
  text-align: center;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const PageCountMobile = styled.h2`
  font-weight: 400;
  font-size: 15px;
  display: none;

  @media screen and (max-width: 940px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 7rem;

    bottom: -100px;
    right: 25%;
  }
`;

const ScrollIconDesktop = styled.h2`
  font-family: var(--italic-font);
  font-weight: 400;
  font-size: 20px;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 940px) {
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
    // margin-left: 1rem;
  }
  @media screen and (max-width: 940px) {
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
  font-size: 29px;
  font-family: var(--italic-font);

  margin-bottom: 14px;
  margin-top: 1rem;

  @media screen and (max-width: 940px) {
    margin-top: 1rem;
  }
`;

const CardText = styled.div`
  font-size: 14px;
  opacity: 30%;
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.01em;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;
const CardTextLeft = styled.div`
  font-size: 14px;
  opacity: 100%;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -0.01em;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const CardTextMobile = styled.div`
  font-size: 14px;
  opacity: 30%;
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  display: none;

  @media screen and (max-width: 940px) {
    display: block;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  margin-left: 120px;
  position: relative;
  flex-shrink: 0;

  @media screen and (max-width: 940px) {
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
  // @media screen and (max-width: 940px) {
  //   .bottle-bg {
  //     width: 260px;
  //     height: 390px;
  //   }
  // }
  @media screen and (max-width: 940px) {
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
  margin: auto;
  margin-left: 2rem;
  justify-content: space-between;
  max-width: 320px;

  @media screen and (max-width: 940px) {
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
  margin-right: 5rem;
  hr {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 940px) {
    width: 300px;
    height: 400px;
  }
`;
