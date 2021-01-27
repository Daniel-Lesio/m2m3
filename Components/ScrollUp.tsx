import { useContext } from 'react'
import { pageContext } from '../State/pageContext'

import styled from 'styled-components';
import Image from 'next/image'
import {motion , AnimatePresence} from 'framer-motion'
import jump from 'jump.js'
export interface ScrollUpProps {
    
}
 
const ScrollUp: React.FunctionComponent<ScrollUpProps> = () => {
    const { scrolled } = useContext(pageContext)
    const handler= () =>{
        jump('#hero')
    } 
    return ( 
        <AnimatePresence>
            {
                scrolled && (
                    <ScrollUpComp
                        whileHover={{
                            opacity: 1
                        }}
                        onClick={handler}
                        variants={scrollUpVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        >
                            <Image
                            src='/assets/keyboard_arrow_up-24px.svg'
                            height={24}
                            width={24}
                            />
                    </ScrollUpComp>
                )
            } 
        </AnimatePresence>
    );
}
 
export default ScrollUp;

const ScrollUpComp = styled(motion.div)`
    opacity: 0.2;
    position: fixed;
    bottom: 10px;
    right: 10px;
    bottom: 10px;
    background: rgb(255,255,255);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0px 1px 9px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;


const scrollUpVariants ={
    visible : {
        opacity : 1,
        x : 0
    },
    hidden : {
        opacity:  0,
        x : -10
    }
}