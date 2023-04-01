import styled from 'styled-components';
import ArrowIcon from '../assets/ArrowIcon';

export default function LeftSide() {
  return (
    <Wrapper>
      <Content>
        <HeroText> Step Aside, Mother Nature!</HeroText>
        <CardTextLeft>
          ...and behold the miracle of the atomic harvest. Buy now and add your
          contribution to the heap!
        </CardTextLeft>
        <ActionBtn>
          Shop Now
          <ArrowIcon />
        </ActionBtn>
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
  div {
    
  }
`;

const Content = styled.div`
  margin: 2rem;
  margin-left: 3rem;
 
`;

const ActionBtn = styled.button`
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  background-color: var(--atoms-bg);
  padding: 2px;
  border: none;

  @media screen and (max-width: 940px) {
    justify-content: center;
  }
  svg {
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
