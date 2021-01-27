import styled from 'styled-components';
export interface LanguagesProps {
    
}
 
const Languages: React.FunctionComponent<LanguagesProps> = () => {
    return ( 
        <LangComp>
            PL
        </LangComp> 
    );
}
 
export default Languages;

const LangComp = styled.div`
    font-family: 'Montserrat', sans-serif;
    justify-self: flex-end;
    align-self: flex-end;
    margin-left: auto;
    font-weight: 900;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    cursor: pointer;
        &::before{
        content : '';
        position: absolute;
        left: 0px;
        height: 100%;
        width: 2px;
        background: #ddd;
        transform: translateY(-50%);
        top: 50%;
        height: 30px;
    }
`;