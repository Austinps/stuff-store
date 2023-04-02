import styled from 'styled-components';
// import Flicker from './Flicker';

export default function ColorPicker() {
  return (
    <Wrapper>
      <div class='color-price'>
        <div class='color-option'>
          <div class='circles'>
            {' '}
            <span class='circle blue active' id='blue'></span>{' '}
            <span class='circle pink' id='pink'></span>
            <span class='circle yellow ' id='yellow'></span>{' '}
            <span class='circle green ' id='green'></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .color-price {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .color-option .circles {
    display: flex;
  }
  .color-option .circles .circle {
    height: 10px;
    width: 10px;
    background: #0071c7;
    border-radius: 50%;
    margin: 0 8px;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  .color-option .circles .circle.blue.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0071c7;
  }
  .color-option .circles .circle.pink {
    background: #fa1795;
  }
  .color-option .circles .circle.pink.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #fa1795;
  }
  .color-option .circles .circle.yellow {
    background: #f5da00;
  }
  .color-option .circles .circle.yellow.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #f5da00;
  }
  .color-option .circles .circle.green {
    background: #39ff14;
  }
  .color-option .circles .circle.green.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #39ff14;
  }
  .color-price .price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .color-price .price .price_num {
    font-size: 25px;
    font-weight: 600;
    color: #707070;
  }
  .color-price .price .price_letter {
    font-size: 10px;
    font-weight: 600;
    margin-top: -4px;
    color: #707070;
  }
`;
