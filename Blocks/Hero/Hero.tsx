import styled from 'styled-components';
import Image from 'next/image'
export interface HeroProps {
    
}
 
const Hero: React.FunctionComponent<HeroProps> = () => {
    return ( 
        
        <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
            <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:mr-20 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-bordo title-font">M2M3</h2>
                <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-darkblue lg:text-left lg:text-5xl title-font">
                Mieszkania w Łodzi...
                </h1>
                <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                Szukasz mieszkania, pokoju ? A może chcesz zainwestować w mieszkania na wynajem. Świetnie trafiłeś, chętnie ci w tym pomożemy                </p>
                <div className="flex justify-center">
                    <a href="#"
                        className="inline-flex items-center font-semibold text-bordo md:mb-2 lg:mb-0 hover:text-blue-400 ">
                        Więcej
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                            height="20" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                    </a>
                </div>
            </div>
            <HeroImg className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2 mt-5" style={{transform : 'translateY(30px)'}}>
                <Image
                
                src='/assets/heroes/2.jpg'
                width='800'
                height='600'
                />
                
            </HeroImg>
        </div>
    </section>
              
    );
}
 
export default Hero;


const HeroImg = styled.div`
  position:  relative;
  display: flex;
  &::after{
    z-index: -1;
    position: absolute;
    content:  '';
    left: 10px;
    top: 10px;
    width: 100%;
    height: 100%;
    background: #2c2c2c;
  }
`;