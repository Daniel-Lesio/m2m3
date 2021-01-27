import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 *{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
 }
 html, body {
    height:100%;
}
    body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    overflow-x: hidden;
  }
  .center{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  section{
    min-height: 100vh;
 
  }
  .container{
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding-left: 8px;
      padding-right: 8px;
      max-width: 100vw;

      @media (min-width : 640px){
        max-width: 640px;
      }
      @media (min-width : 768px){
        max-width: 768px;
      }
      @media (min-width : 1024px){
        max-width: 1024px;
      }
      @media (min-width : 1280px){
        max-width: 1280px;
      }
      @media (min-width : 1536px){
        max-width: 1280px;
      }
  }
`;
 
export default GlobalStyle;