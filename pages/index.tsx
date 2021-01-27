import Layout from "../Layout/Layout";
import Header from '../Blocks/Header/Header'
import Hero from '../Blocks/Hero/Hero'
import Footer from '../Blocks/Footer/Footer'
export interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    return ( 
        <Layout>
            <Header/>
            <Hero/>
            <Footer/>
        </Layout> 
    );
}
 
export default Home;