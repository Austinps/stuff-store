import styled from 'styled-components';
import { CgScrollV } from 'react-icons/cg';
import { MdAddShoppingCart } from 'react-icons/md';
import img from '../assets/atoms2.webp';
import Glow from './Glow';

export default function Card() {
  return (
    <Wrapper id='atoms'>
      <ProductTitle>
        Atomic Harvest
        {/* <ProductPrice>
              <div>
                €39<span>.99</span>
              </div>
              <span>300ml</span>
            </ProductPrice> */}
      </ProductTitle>
      <CartIcon>
        <Glow />
      </CartIcon>
      <hr />
      <CardText>
        Lorem pollution dolor sit amet, disposable ut sadipscing elitrope, sed
        diam eos nonumy eirmod toxic invidunt garbage utui dolore landfill
        plastic aliquyam eraton, ised diam non-biodegradable. At vero plastic
        pollution et accusam et justo errninduo dolores et ea microplastics.
        Stet clita kasd gubergren, nobrahinoi sea takimata overconsumption est
        Lorem plastic bags dolor sit ametoi. Lorem ipsum dolor sit amet,
        consetetur sadipscing ised elitr, oised diam nonumy eirmod temporo
        invidunt ut plastic packaging et dolore plastic waste erat, sed diam
        harmful. At vero eosip et accusam et justo duo dolores et ea single-use.
        Stetir clita kasd gubergren, no sea takimata et environmental plastic
        debris. Lorem ipsum dolor sit amet, harmful sadipscing elitr, sed eirmod
        temporini invidunt plastic straws dolore magnadegradation. Lorem
        pollution dolore sit amet, disposable sadipscing elitr, sedi diam nonumy
        eirmodei toxic invidunt ut garbage et dolore landfill aliquyam erat, sed
        uto diam ui non-biodegradable. At vero plastic pollution et accusam
        dolores et ea accusam et justo duo dolores et eai garbage waste
        microplastics. Stet clita kasd gubergren, no season i ut takimata
        overconsumption est Lorem ut plastic bags dolor it amet plastic
        doloverconsumption. Lorem pollution dolor sit amet, disposable ut
        sadipscing elitr, sed diam eos nonumy eirmod toxic invidunt garbage
        dolore landfill plastic aliquyam erat, got sed diam non-biodegradable.
        At vero plastic pollution et accusam et justo duo dolores et ea
        microplastics.Lorem pollution dolor sit amet odor, disposable ut
        sadipscing elitr. Lorem ipsum dolor sit ameto delo, conseteturas
        sadipscing sed elitr, sed diam nonumy eirmod totim temporum invidunt ut
        plastic packaging etuti dolore plastic waste erat, sed diam harmful. At
        vero plastic pollution et accusam eto justo duo dolores et ea
        microplastics.Lorem pollution dolor sitim amet, oi disposable ut sadipscing
        elitr. Lorem ipsum dolor sit amet, consetetur sadipscing sed elitr, sed
        diam nonumyl eirmodoretaitempor invidunt ut plasticsdfumoptu
        packagingetdoloreplasticwasteera,seddolore ut se
        diamharmful.Atveroplasticpollutionzrmicroplastics.
      </CardText>

      <CardTextMobile>
        Lorem ipsum dolore, toxic sadipscing eirmod plastic pollution invidunt
        toxic landfill waste, non-biodegradable. Stet vero plastic oceans et
        accusam et justo duo microplastics et ea plastic bottles. Stet clita
        kasd et accusam gubergren microplastics overconsumption est Lorem
        plastic bags plastic packaging et dolore plastic debris erat, sed diam
        harmful. At vero eos amet accusam et justo duo dolores et ea plastic
        straws. Stet est environmental degradation. Lorem ipsum dolor sit amet,
        harmful elitr, plastic pollution single-use erat. Lorem ipsum dolor amet
        sed diam, et toxic sadipscing elitr eirmod plastic sed pollution
        invidunt ut landfill waste, sed diam et non-biodegradable. At vero
        plastic oceans et accusam et justo duo microplastics et ea plastic
        bottles. Stet gubergren overconsumption toxic Lorem plastic bags plastic
        packaging et justo dolore plastic debris harmful.
      </CardTextMobile>

      <img className='bottle-bg' src='' alt='' />
      <img className='bottle-img' src={img} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding: 1rem;

  width: 350px;
  height: 450px;
  box-shadow: -1px 15px 30px -12px rgb(32, 32, 32);
  border-radius: 0.9rem;
  background-color: var(--bg-beach);
  color: var(--text);
  cursor: pointer;
  margin: 3rem;
  margin-right: 3rem;
  hr {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 940px) {
    width: 300px;
    height: 400px;
  }
`;

const CardText = styled.div`
  font-size: 10px;
  opacity: 30%;
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  padding: 2px;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const CardTextMobile = styled.div`
  font-size: 14px;
  opacity: 30%;
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  display: none;

  @media screen and (max-width: 940px) {
    display: block;
  }
`;

const ProductTitle = styled.h3`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 15px;
  margin-right: 1rem;
`;

const ProductPrice = styled.h3`
  display: flex;
  border-radious: 5px;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  text-transform: uppercase;
  background-color: var(--organisms-bg);
  padding: 2px 3px;
  border-radius: 2px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 600;

  span {
    font-size: 8px;
    font-family: var(--font-italic);
    text-transform: lowercase;
  }
`;

const CentPrice = styled.h3`
  border-radius: 2px;
  font-size: 4px;
  letter-spacing: 1px;
  font-weight: 600;
  display: inline;
`;
const HeaderMobile = styled.h3`
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 4px;
  font-weight: 600;
  display: none;
  position: absolute;
  top: 25px;
  left: 195px;

  @media screen and (max-width: 940px) {
    display: block;
  }
`;

const CartIcon = styled.div`
  position: absolute;
  bottom: 5px;
  right: 8px;
  // border: 1px solid black;
  padding: 5px;
  border-radius: 2px;
`;

const MainTitle = styled.h1`
  font-family: var(--italic-font);
  font-size: 100px;
  font-weight: 400;
  line-height: 1em;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const MainTitleMobile = styled.h1`
  font-family: var(--italic-font);
  font-size: 70px;
  font-weight: 400;
  line-height: 0.7em;
  display: none;

  @media screen and (max-width: 940px) {
    display: block;
  }
`;
