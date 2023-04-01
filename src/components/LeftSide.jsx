import styled from 'styled-components';
import ArrowIcon from '../assets/ArrowIcon';

export default function LeftSide() {
  return (
    <Wrapper>
      <Content>
        <br />
        <HeroText> Step Aside, Mother Nature!</HeroText>
        <CardTextLeft>
          ...and behold the miracle of the atomic harvest. Buy now and add your
          contribution to the heap!
        </CardTextLeft>

        <button className='more-menu'>
          Shop Now
          <ArrowIcon />
        </button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-left: 5rem;
  justify-content: space-between;
  max-width: 320px;

  @media screen and (max-width: 940px) {
    text-align: center;
    max-width: 450px;
  }
`;

const Content = styled.div`
  margin: 2rem;
  margin-left: 3rem;
  .more-menu {
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    background-color: var(--atoms-bg);
    padding: 2px;
    border: none;
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
  font-size: 55px;
  font-family: var(--italic-font);

  margin-bottom: 0.5rem;

  @media screen and (max-width: 940px) {
    margin-top: 1rem;
  }
`;

const CardTextLeft = styled.div`
  font-size: 14px;
  opacity: 100%;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;
