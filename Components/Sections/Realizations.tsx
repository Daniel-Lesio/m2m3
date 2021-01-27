import styled from 'styled-components';
import Image from 'next/image'
import {useInView} from 'react-intersection-observer'

const Realizations = () => {
    const { ref, inView } = useInView()
    
    return (
        <RealizationsComp id='realizations' className='center'>
            
            <div ref={ref} className="container">
            

            </div>
        </RealizationsComp>
    );
}

export default Realizations;
const RealizationsComp = styled.section`
    img{
        object-fit: cover;
    }
`;