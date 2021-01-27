import styled from 'styled-components';
import Image from 'next/image'
import {useInView} from 'react-intersection-observer'
import {useEffect,useContext} from 'react'
import {pageContext} from '../../State/pageContext'
import { motion } from 'framer-motion'
const Investments = () => {
    const { ref, inView } = useInView()
    const {primaryColor,sectionActive,changeActive}  = useContext(pageContext)

    useEffect(() => {
        if(inView){
            changeActive('investments')
        }        
    }, [inView]);
    return (
        <InvestmentsComp id='investments' className='center'>
            
            <Grid ref={ref} className="container">
                <div className="left">
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, repellendus.</p>
                </div>           
                <div className="right">
                    <div>box1</div>
                    <div>box2</div>
                    <div>box3</div>
                    <div>box4</div>
                </div>
            </Grid>
        </InvestmentsComp>
    );
}

export default Investments;
const InvestmentsComp = styled.section`
padding-top: 120px;
background: #F3F3FA;
position: relative;
    img{
        object-fit: cover;
    }
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap : 100px;
    .left{
        min-height: 300px;
    }
    .right{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        gap : 10px;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
        }
    }

`