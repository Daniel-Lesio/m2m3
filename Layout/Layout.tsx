import React , {useState} from 'react';
import GlobalStyle from '../SC/globalStyles'
import Header from '../Components/Header/Header'
import Info from '../Components/Info'
import { PageContextProvider } from '../State/pageContext'
const Layout : React.FunctionComponent = ({children}) => {
    return (
        <div>

            <GlobalStyle/>

            <Header/>
            {children}
            <Info/>
        </div>
    );
}

export default Layout;
