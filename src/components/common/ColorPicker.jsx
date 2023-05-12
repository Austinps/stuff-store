import styled from 'styled-components';

export default function ColorPicker() {
  const clickHandler = (e) => {
    const elems = document.querySelectorAll('.active');
    [].forEach.call(elems, function (el) {
      el.classList.remove('active');
    });
    e.target.classList.add('active');
  };

  return (
    <Wrapper onClick={clickHandler}>
      <span className='circle small active'></span>
      <span className='circle medium'></span>
      <span className='circle large'></span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  .circle {
    height: 11px;
    width: 11px;
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .circle.small {
    background: var(--neon-text-color);
  }
  .active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--body-color);
  }
  .circle.medium {
    background: var(--clr-green);
  }

  .circle.large {
    background: var(--neon-border-color);
  }
`;
