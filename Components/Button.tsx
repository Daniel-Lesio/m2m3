import React from 'react';
import styled from 'styled-components';
interface ButtonInterface {
    value : string
}
const Button  = ({value} : ButtonInterface) => {
    return (
        <ButtonComp>
            {value}
        </ButtonComp>
    );
}

export default Button;


const ButtonComp = styled.button`
  padding : 16px 32px;
  border-radius: 5px;
  background: #972355;
  color : #fff;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  outline: none;
  border: solid 3px #972355;
  cursor: pointer;
  transition: all ease-in-out .3s;
  &:hover{
    background: #972355;
    color: white;
  }
`;