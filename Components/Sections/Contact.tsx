import styled from 'styled-components';
import {useInView} from 'react-intersection-observer'
const Contact = () => {
    const { ref, inView } = useInView()
    
    return (
        <ContactComp id='contact'>
            <div ref={ref} className="container">

            </div>
        </ContactComp>
    );
}

export default Contact;
const ContactComp = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;