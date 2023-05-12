import styled from 'styled-components';

export default function Legend() {
  return (
    <Wrapper>
      <div className='legend'>
        <div className='legend__item'>
          <i>N</i>
          <span>Nuts</span>
        </div>
        <div className='legend__item'>
          <i>E</i>
          <span>Eggs</span>
        </div>
        <div className='legend__item'>
          <i>W</i>
          <span>Wheat</span>
        </div>
        <div className='legend__item'>
          <i>D</i>
          <span>Dairy</span>
        </div>
        <div className='legend__item'>
          <i>S</i>
          <span>Seafood</span>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .legend {
    border: 6px solid #04110f;
    border-width: 0 6px 6px 0;
   

    @media (min-width: 880px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      border-width: 6px;
    }
    &__item {
      display: block;
      background: #e2dccc;
      span {
        display: inline-block;
        height: 40px;
        text-transform: uppercase;
        font-weight: 500;
        padding: 12px 20px 12px 12px;
        flex: auto;
      }
      i {
        display: inline-block;
        width: 55px;
        height: 45px;
        font-family: Syncopate, sans-serif;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
        line-height: 2.3;
        color: #e2dccc;
        border: 6px solid #04110f;
        border-width: 0 6px;
      }
      &:nth-child(1) {
        color: #00acc1;
        i {
          background: #00acc1;
        }
      }
      &:nth-child(2) {
        color: #931a47;
        i {
          background: #931a47;
        }
      }
      &:nth-child(3) {
        color: #e88c30;
        i {
          background: #e88c30;
        }
      }
      &:nth-child(4) {
        color: #009688;
        i {
          background: #009688;
        }
      }
      &:nth-child(5) {
        color: #ca3101;
        i {
          background: #ca3101;
        }
      }
    }
  }
`;
