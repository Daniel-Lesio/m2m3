import styled from 'styled-components';
export interface NumbersProps {
    
}
 
const Numbers: React.FunctionComponent<NumbersProps> = () => {
    return ( 
        <NumbersComp>
            <div className="container">
                <div className='numberbox'>
                    <h1>11</h1>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className='numberbox'>
                    <h1>14</h1>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className='numberbox'>
                    <h1>14</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </div>
        </NumbersComp> 
    );
}
 
export default Numbers;

const NumbersComp = styled.div`
    background: #972355;
    padding-top: 100px;
    padding-bottom: 100px;
    color : white;
    .container{

        color : white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    
        .numberbox{
            width: 100%;
            @media (min-width : 1024px){
                width: 30%;

            }
            background: red;
            color : white;
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
                color: #fff;
            }
        }
    }
  
`;