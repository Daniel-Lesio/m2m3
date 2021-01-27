import "tailwindcss/tailwind.css";
// import '../styles/globals.scss'
import { PageContextProvider } from '../State/pageContext'


function MyApp({ Component, pageProps }) {
  return (
    <PageContextProvider>
    <Component {...pageProps} />
    </PageContextProvider>
  )
}

export default MyApp
