import { useContext,useState } from 'react'
import { pageContext } from '../../State/pageContext'
import styled from 'styled-components';
import Logo from './Logo'
import Link from 'next/link'
import {motion,useViewportScroll,useTransform} from 'framer-motion'
import Languages from '../Languages/Languages';
export interface HeaderProps {
    
}
 
const Header: React.FunctionComponent<HeaderProps> = () => {
    const {scrollY ,scrollYProgress} = useViewportScroll()
    const {setScrolled,scrolled} = useContext(pageContext)
    scrollY.onChange(latest=>{
        if(latest > 100){
            setScrolled(true)
        }
        else{
                setScrolled(false)
        }
    })
    
    


    return ( 
        <HeaderComp
        scrolledProp={scrolled}>
            <Indicator/>

            
            <div className="container">
                <Logo/>
                <NavbarComp>
                    <li>O nas</li>
                    <li>O nas</li>
                    <li>O nas</li>
                    <li>O nas</li>
                    <li>O nas</li>
                </NavbarComp>
                <Languages/>
            </div>
        </HeaderComp> 
    );
}
 
export default Header;

interface HeaderCompProps {
    scrolledProp : boolean
}
const HeaderComp = styled.header<HeaderCompProps>`
    opacity: .2;
    z-index: 50;
    position: fixed;
    top: 0px;
    left: 0px;
    min-height: 80px;
    width: 100vw;
    background: rgba(#972355,0.2);
    background: ${props=>props.scrolledProp ? ' rgba(#fff,0.9)' : 'rgba(#fff,0.1)'};
    box-shadow: 0px 1px 9px 4px rgba(0, 0, 0, 0.0);
    line-height: 80px;
    .container{
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color : white;
    }
`;



const Indicator = styled(motion.div)`
position: fixed;
top: 0px;
left: 0px;
height: 2px;
background: #972355;

`;

const NavbarComp = styled.ul`
display: flex;
align-items: center;
li{
    padding-left: 10px;
    padding-right: 10px;
    text-transform: uppercase;
    font-weight: 900;
}
  
`;

