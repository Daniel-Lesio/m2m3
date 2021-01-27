import styled from 'styled-components';
import Image from 'next/image'
import {useInView} from 'react-intersection-observer'

const Sales = () => {
    const { ref, inView } = useInView()


    return (
        <SalesComp id='sales' className='center'>
            <Image
            src='/assets/lodz.jpg'
            layout='fill'
            />
            <div ref={ref} className="container">
            

            </div>
        </SalesComp>
    );
}

export default Sales;
const SalesComp = styled.section`
    img{
        object-fit: cover;
    }
`;