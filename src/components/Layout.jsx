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
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  background-color: var(--bg-color);
  padding: 0 30px;
`;
