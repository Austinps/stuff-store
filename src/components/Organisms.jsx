import styled from 'styled-components';
import ArrowIcon from '../assets/ArrowIcon';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function Organisms() {
  return (
    <Main>
      <LeftSide>
        <MainContent>
          <br />

          <MainHeader>Plastic</MainHeader>
          <MainTitle>Stuff</MainTitle>

          <MainContentTitle>
            It takes 500 years for our plastic bottles to decompose.
          </MainContentTitle>
          <div className='more-menu'>
            Shop Now
            <ArrowIcon />
          </div>
        </MainContent>
      </LeftSide>
      <Center>
        <AiOutlineArrowLeft />
        <Card id='organisms'>
          <ProductTitle>Organisms</ProductTitle>
          <hr />
          <MainContentSubtitle>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt labore dolore magna aliquyam erat, sed diam sanctus
            est voluptua.
          </MainContentSubtitle>
          <MainContentSubtitleMobile>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est sit amet.
          </MainContentSubtitleMobile>

          <img className='bottle-bg' src='' alt='' />
          <img
            className='bottle-img'
            src='https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119'
          />
        </Card>
        <AiOutlineArrowRight />
      </Center>

      <MainSubtitleMobile>1 / 4</MainSubtitleMobile>

      <MainSubtitle>1 / 4</MainSubtitle>

      <MainTitleMobile>Stuff</MainTitleMobile>
      <MainHeaderMobile>Plastic</MainHeaderMobile>
    </Main>
  );
}

const Main = styled.main`
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

const MainHeader = styled.h3`
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

const MainHeaderMobile = styled.h3`
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

const MainSubtitle = styled.h2`
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

const MainContent = styled.div`
  margin: 2rem;
  margin-left: 5rem;
  .more-menu {
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-left: 1rem;
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

const MainContentTitle = styled.div`
  font-size: 21px;
  font-family: var(--italic-font);
  font-style: italic;
  margin-bottom: 14px;
  margin-top: 2rem;

  @media screen and (max-width: 930px) {
    margin-top: 1rem;
  }
`;

const MainSubtitleMobile = styled.h2`
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

const MainContentSubtitle = styled.div`
  opacity: 70%;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
  letter-spacing: -0.01em;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;
const MainContentSubtitleMobile = styled.div`
  opacity: 70%;
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
