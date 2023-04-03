import styled from 'styled-components';

export default function ColorPicker() {
  return (
    <Wrapper>
      <div className='color-price'>
        <div className='color-option'>
          <div className='circles'>
            <span className='circle atoms active' id='atoms'></span>
            <span className='circle molecules' id='molecules'></span>
            <span className='circle organisms ' id='organisms'></span>
            <span className='circle ecosystems ' id='ecosystems'></span>
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
    height: 11px;
    width: 11px;
    background: var(--molecules-bg);
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  .color-option .circles .circle.atoms.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--molecules-bg);
  }
  .color-option .circles .circle.molecules {
    background: var(--organisms-bg);
  }
  .color-option .circles .circle.molecules.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--organisms-bg);
  }
  .color-option .circles .circle.organisms {
    background: var(--ecosystems-bg);
  }
  .color-option .circles .circle.organisms.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--ecosystems-bg);
  }
  .color-option .circles .circle.ecosystems {
    background: var(--atoms-bg);
  }
  .color-option .circles .circle.ecosystems.active {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--atoms-bg);
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
