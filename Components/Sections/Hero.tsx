import styled from 'styled-components';
import Image from 'next/image'
export interface HeroProps {
    
}
 
const Hero: React.FunctionComponent<HeroProps> = () => {
    return ( 
        <HeroComp id='hero'>
            <Image
            src='/assets/heroes/3.jpg'
            layout='fill'
            />
            <div className="container">
                <HeroBox className='hero-box'>
                    <h1>Mieszkania w Łodzi</h1>
                    <p>Szukasz mieszkania, pokoju ? A może chcesz zainwestować w mieszkania na wynajem. Świetnie trafiłeś, chętnie ci w tym pomożemy</p>
                    <Btns>
                     <div className="btn btn-primary">
                            Kontakt     
                    </div>   
                     <div className="btn btn-secondary"></div>   
                    </Btns>
                </HeroBox>
            </div>
        </HeroComp> 
    );
}
 
export default Hero;

const HeroComp = styled.section`
    min-height: 100vh;
    position  : relative ;
    display: flex;
    height: 100vh;
    img{
        z-index: -1;
    }
    .container{
        height: 100%;
        display: flex;
        /* justify-content :center;
        align-items : center; */
    }
`;

const HeroBox = styled.div`
    
    width: 100%;
    @media (min-width : 1024px){
        width: 50%;

    }
    align-self: center;
    padding: 30px;

    h1{
    }
    p{
        background: #fff;
    }

`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  .btn-primary {
      margin-right: 20px;
  }
`;