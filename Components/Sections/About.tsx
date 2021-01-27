import {useEffect} from 'react'
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer'
const About = () => {
    const { ref, inView } = useInView()

    return (
        <AboutComp id='about'>
            <div ref={ref} className="container">

            </div>
        </AboutComp>
    );
}

export default About;
const AboutComp = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;