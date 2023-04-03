import styled from 'styled-components';
import CardSection from './CardSection';

export default function AtomsPage() {
  return (
    <Wrapper>
      <CardSection />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  position: relative;
  margin: 3rem;
`;
