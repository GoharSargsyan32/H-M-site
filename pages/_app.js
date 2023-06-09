import '@/styles/globals.scss'
import Header from '@/components/header/header'
import Sale from '@/components/sale/sale'
import Pool from '@/components/pool/pool'
import Women from '@/components/women/women'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      
      <Component {...pageProps} />

    </>
  )
  
}
