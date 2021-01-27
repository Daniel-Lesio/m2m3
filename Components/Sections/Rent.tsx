import styled from 'styled-components';
import Image from 'next/image'
import {useInView} from 'react-intersection-observer'

const Rent = () => {
    const { ref, inView } = useInView()
    return (
        <RentComp id='rent' className='center'>
            <Image
            src='/assets/lodz.jpg'
            layout='fill'
            />
            <div ref={ref} className="container">
            

            </div>
        </RentComp>
    );
}

export default Rent;
const RentComp = styled.section`
    img{
        object-fit: cover;
    }
`;