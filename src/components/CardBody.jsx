import styled from 'styled-components';
import img from '../assets/atoms2.webp';
import { desktopText, mobileText } from '../data/bgText';

export default function CardBody({ children }) {
  return (
    <Wrapper id='atoms'>
      {children}
      <hr />
      <CardText>{desktopText}</CardText>
      <ImageWrapper>
        <img src={img} />
      </ImageWrapper>
      <PageCountDesktop>1 of 4</PageCountDesktop>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding: 0.5rem 1rem 0.25rem 1 rem;
  width: 350px;
  height: 450px;
  box-shadow: -1px 15px 30px -12px rgb(32, 32, 32);
  border-radius: 0.9rem;
  background-color: var(--bg-beach);
  color: var(--text);
  cursor: pointer;
  margin: 1.5rem;
  margin-right: 3rem;
  padding: 1rem;


  hr {
    margin 5px;
  }

  @media screen and (max-width: 940px) {
    width: 300px;
    height: 400px;
  }
`;

const CardText = styled.div`
  text-align: justify;
  font-size: 10px;
  opacity: 30%;
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.01em;

  overflow: hidden;

  @media screen and (max-width: 940px) {
    font-size: 8px;
    opacity: 30%;
    line-height: 1;
    margin-bottom: 24px;
    letter-spacing: -0.01em;
  }
`;

const ImageWrapper = styled.div`
  img {
    position: absolute;
    top: 23%;
    left: 0%;
    transform: scale(1.4);

    @media screen and (max-width: 940px) {
      left: 0%;
    }
  }
`;

const PageCountDesktop = styled.h3`
  position: absolute;
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 600;
  bottom: 6px;
  right: 12px;
  text-align: center;

`;
