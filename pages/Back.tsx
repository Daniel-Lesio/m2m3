import Head from 'next/head'
import Layout from '../Layout/Layout'
import {Hero,Investments,Rent,Sales,Realizations,About,Contact} from '../Components/Sections/sections'
import Footer from '../Components/Footer/Footer'
import ScrollUp from '../Components/ScrollUp'
import Numbers from '../Components/Numbers/Numbers'
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>M2M3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Hero/>
      <Numbers/>
      <Investments/>
      <ScrollUp/>
      </main>

    <Footer/>
    </Layout>
  )
}
