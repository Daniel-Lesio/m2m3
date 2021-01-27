import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    return (
        <FooterComp>
            <div className="container">
                M2M3
            </div>
        </FooterComp>
    );
}

export default Footer;

const FooterComp = styled.footer`
  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
  background: #972355;
  text-align: center;
  color : white;
  text-transform: uppercase;
`;