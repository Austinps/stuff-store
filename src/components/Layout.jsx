import styled from 'styled-components';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Container className='container'>
        <Navigation />
        {children}
      </Container>
    </>
  );
}

const Container = styled.div`
  // max-width: 1100px;
  border-radius: 4px;
  // max-height: 680px;
  // height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  background-color: var(--bg-color);
  padding: 0 30px;

  @media (max-width: 480px) {
    .container {
      height: 100%;
      max-height: 100%;
    }
  }
`;
