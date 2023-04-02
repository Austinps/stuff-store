import styled from 'styled-components';

export default function NeonSign() {
  return (
    <Wrapper>
      <Neon>
        Atomic Harvest
        {/* <br />
        Mother Nature! */}
      </Neon>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 auto;
`;
const Neon = styled.h1`
color: #fff;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;
}
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;
