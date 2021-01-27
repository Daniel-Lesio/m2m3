import styled from 'styled-components';
import {useContext} from 'react';
import {pageContext} from '../State/pageContext'

const Info = (  ) => {
    const {primaryColor,sectionActive,changeActive}  = useContext(pageContext)

    return (
        <InfoComp>
            {sectionActive}
        </InfoComp>
    );
}

export default Info;


const InfoComp = styled.div`
display : none!important;
z-index: 90;
font-size: 24px;
line-height: 30px;
/* display: flex; */
justify-content: center;
align-items: center;
position:  fixed;
transform: translateX(-50%);
left: 50%;
bottom: 10px;
background: white;
border: solid 2px #3E3E3F;
border-radius: 5px;
padding: 10px 20px;
min-width: 200px;
`;