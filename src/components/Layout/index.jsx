import styled from 'styled-components';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Container>
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
  justify-content;center;
  align-items:center;
  flex-direction: column;
  scroll-behavior: smooth;
  background-color: var(--bg-color);
  padding: 0 30px;
`;
