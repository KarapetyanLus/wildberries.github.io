import '../styles/globals.css'
import cls from "../styles/App.module.scss"
import Header from "../components/header/Header"
import store from '../store/store'
import { Provider } from 'react-redux'
import Footer from '../components/footer/footer'
import FooterTop from '../components/footerTop/footerTop'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return(
    <>
    <Provider store = {store}>
      <Header/>
      <main className={`${cls.main} ${anton.className}`}>
      <Component {...pageProps} />
      </main>
      <FooterTop/>
      <Footer/>
    </Provider>
      
    </>
  )
}
